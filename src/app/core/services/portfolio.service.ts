import { Injectable, signal, computed } from '@angular/core';
import { 
  Project, 
  Spread, 
  Candidate, 
  SiteMetrics 
} from '../models/portfolio.models';
import { 
  CANDIDATE, 
  PROJECTS as DEFAULT_PROJECTS, 
  SPREADS as DEFAULT_SPREADS, 
  SITE_METRICS as DEFAULT_METRICS 
} from '../../data/portfolio-data';

const STORAGE_KEY_PROJECTS = 'sm_portfolio_custom_projects';
const STORAGE_KEY_SPREADS = 'sm_portfolio_custom_spreads';
const STORAGE_KEY_THEME = 'sm_portfolio_theme';

export type ArchitecturalTheme = 'obsidian' | 'blueprint';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  // Signals for reactive state
  readonly candidate = signal<Candidate>(CANDIDATE);
  readonly projects = signal<Project[]>([]);
  readonly spreads = signal<Spread[]>([]);
  readonly theme = signal<ArchitecturalTheme>('obsidian');

  // Computed metrics
  readonly siteMetrics = computed<SiteMetrics>(() => {
    return {
      totalProjects: this.projects().length,
      portfolioPages: this.spreads().length,
      academicYears: this.candidate().academic_years,
      competencyCount: this.candidate().core_competencies.length,
      softwareCount: this.candidate().software_skills.length
    };
  });

  constructor() {
    this.loadState();
  }

  toggleTheme(): void {
    const next = this.theme() === 'obsidian' ? 'blueprint' : 'obsidian';
    this.setTheme(next);
  }

  setTheme(theme: ArchitecturalTheme): void {
    this.theme.set(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
    try {
      localStorage.setItem(STORAGE_KEY_THEME, theme);
    } catch {}
  }

  private loadState(): void {
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEY_THEME) as ArchitecturalTheme | null;
      if (storedTheme === 'blueprint' || storedTheme === 'obsidian') {
        this.setTheme(storedTheme);
      } else {
        this.setTheme('obsidian');
      }

      const storedProjects = localStorage.getItem(STORAGE_KEY_PROJECTS);
      const storedSpreads = localStorage.getItem(STORAGE_KEY_SPREADS);

      if (storedProjects) {
        this.projects.set(JSON.parse(storedProjects));
      } else {
        this.projects.set([...DEFAULT_PROJECTS]);
      }

      if (storedSpreads) {
        this.spreads.set(JSON.parse(storedSpreads));
      } else {
        this.spreads.set([...DEFAULT_SPREADS]);
      }
    } catch (e) {
      console.warn('Failed to read portfolio state from localStorage, using defaults.', e);
      this.projects.set([...DEFAULT_PROJECTS]);
      this.spreads.set([...DEFAULT_SPREADS]);
    }
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(this.projects()));
      localStorage.setItem(STORAGE_KEY_SPREADS, JSON.stringify(this.spreads()));
    } catch (e) {
      console.error('Failed to save portfolio state to localStorage', e);
    }
  }

  // --- Read Operations ---
  getProjectById(id: string): Project | undefined {
    return this.projects().find(p => p.id === id);
  }

  getSpreadsForProject(projectId: string): Spread[] {
    const project = this.getProjectById(projectId);
    if (!project) return [];

    // Filter strictly by matching projectId
    return this.spreads().filter(s => {
      if (s.projectId === projectId) return true;
      // Fallback for default spreads if projectId was omitted
      if (!s.projectId && project.spreadStart && project.spreadEnd && s.page >= project.spreadStart && s.page <= project.spreadEnd) {
        return true;
      }
      return false;
    });
  }

  getSpreadByPage(page: number): Spread | undefined {
    return this.spreads().find(s => s.page === page);
  }

  // --- Project CRUD Operations ---
  addProject(projectData: Partial<Project>, customCoverImage?: string): Project {
    const slug = (projectData.title || 'untitled')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '') + '-' + Date.now().toString(36);

    const maxSpread = this.spreads().reduce((max, s) => Math.max(max, s.page), 64);
    const newPage = maxSpread + 1;

    const hasCover = !!(customCoverImage || projectData.customCoverImage);
    const coverUrl = customCoverImage || projectData.customCoverImage || '';

    const newProject: Project = {
      id: slug,
      title: projectData.title || 'New Architecture Project',
      subtitle: projectData.subtitle || 'Architectural Design Proposal',
      category: projectData.category || 'Architecture & Urbanism',
      location: projectData.location || 'Tamil Nadu, India',
      siteArea: projectData.siteArea || '10,000 sq.ft',
      builtUpArea: projectData.builtUpArea || '',
      typology: projectData.typology || projectData.category || 'Architecture',
      software: projectData.software || 'AutoCAD, Revit, Enscape',
      year: projectData.year || '2026',
      period: projectData.period || '2026',
      heroSpread: hasCover ? newPage : undefined,
      coverSpread: hasCover ? newPage : undefined,
      customCoverImage: coverUrl,
      spreadStart: newPage,
      spreadEnd: newPage,
      spreadCount: hasCover ? 1 : 0,
      statement: projectData.statement || 'Comprehensive architectural proposal exploring form, climatic response, and spatial circulation.',
      highlights: projectData.highlights || ['Spatial Planning', 'Passive Ventilation', 'Technical Details'],
      subComponents: [],
      isCustom: true
    };

    // If an image was supplied as cover, also create a Spread for it
    if (coverUrl) {
      const coverSpread: Spread = {
        page: newPage,
        title: `${newProject.title} — Main Perspective`,
        category: newProject.category,
        projectId: newProject.id,
        subProject: null,
        type: '3D Architectural Render',
        description: `Primary conceptual visualization for ${newProject.title}`,
        tags: ['Render', 'Perspective', 'Concept'],
        fullImage: coverUrl,
        mediumImage: coverUrl,
        thumbImage: coverUrl,
        width: 4960,
        height: 3507,
        isCustom: true
      };
      this.spreads.update(curr => [...curr, coverSpread]);
    }

    this.projects.update(curr => [newProject, ...curr]);
    this.saveState();
    return newProject;
  }

  updateProject(id: string, updates: Partial<Project>): boolean {
    const list = this.projects();
    const index = list.findIndex(p => p.id === id);
    if (index === -1) return false;

    const updated = { ...list[index], ...updates };
    this.projects.update(curr => {
      const next = [...curr];
      next[index] = updated;
      return next;
    });

    this.saveState();
    return true;
  }

  deleteProject(id: string): boolean {
    const project = this.getProjectById(id);
    if (!project) return false;

    // Remove project
    this.projects.update(curr => curr.filter(p => p.id !== id));
    // Remove custom spreads associated with it
    this.spreads.update(curr => curr.filter(s => s.projectId !== id));

    this.saveState();
    return true;
  }

  // --- Image / Spread Management ---
  addImageToProject(
    projectId: string, 
    data: { 
      title: string; 
      type: string; 
      imageUrl: string; 
      description?: string; 
      tags?: string[] 
    }
  ): Spread {
    const project = this.getProjectById(projectId);
    const maxSpread = this.spreads().reduce((max, s) => Math.max(max, s.page), 64);
    const newPage = maxSpread + 1;

    const newSpread: Spread = {
      page: newPage,
      title: data.title || `Drawing Sheet #${newPage}`,
      category: project ? project.category : 'Architecture',
      projectId: projectId,
      subProject: null,
      type: data.type || 'Architectural Drawing',
      description: data.description || `Architectural drawing sheet for ${project?.title || 'Project'}`,
      tags: data.tags && data.tags.length ? data.tags : ['Architectural Detail', 'CAD'],
      fullImage: data.imageUrl,
      mediumImage: data.imageUrl,
      thumbImage: data.imageUrl,
      width: 4960,
      height: 3507,
      isCustom: true
    };

    this.spreads.update(curr => [...curr, newSpread]);

    // Update project spread count & auto-set cover if project has none
    if (project) {
      const updates: Partial<Project> = {
        spreadCount: (project.spreadCount || 0) + 1
      };
      if (!project.customCoverImage && (!project.coverSpread || project.coverSpread > 64)) {
        updates.customCoverImage = data.imageUrl;
      }
      this.updateProject(projectId, updates);
    }

    this.saveState();
    return newSpread;
  }

  deleteSpread(page: number): boolean {
    const spread = this.getSpreadByPage(page);
    if (!spread) return false;

    this.spreads.update(curr => curr.filter(s => s.page !== page));

    // Update parent project count
    if (spread.projectId) {
      const project = this.getProjectById(spread.projectId);
      if (project && (project.spreadCount || 0) > 0) {
        const updates: Partial<Project> = {
          spreadCount: Math.max(0, project.spreadCount - 1)
        };
        if (project.customCoverImage === spread.fullImage) {
          updates.customCoverImage = undefined;
        }
        if (project.coverSpread === page) {
          const remainingSpreads = this.getSpreadsForProject(spread.projectId);
          updates.coverSpread = remainingSpreads.length > 0 ? remainingSpreads[0].page : undefined;
        }
        this.updateProject(spread.projectId, updates);
      }
    }

    this.saveState();
    return true;
  }

  setCoverImage(projectId: string, coverImageUrlOrSpread: string | number): boolean {
    const project = this.getProjectById(projectId);
    if (!project) return false;

    if (typeof coverImageUrlOrSpread === 'number') {
      return this.updateProject(projectId, {
        coverSpread: coverImageUrlOrSpread,
        customCoverImage: undefined
      });
    } else {
      return this.updateProject(projectId, {
        customCoverImage: coverImageUrlOrSpread
      });
    }
  }

  // --- Import / Export / Reset ---
  exportData(): string {
    return JSON.stringify({
      version: '1.0',
      exportedAt: new Date().toISOString(),
      projects: this.projects(),
      spreads: this.spreads()
    }, null, 2);
  }

  importData(jsonStr: string): boolean {
    try {
      const parsed = JSON.parse(jsonStr);
      if (Array.isArray(parsed.projects) && Array.isArray(parsed.spreads)) {
        this.projects.set(parsed.projects);
        this.spreads.set(parsed.spreads);
        this.saveState();
        return true;
      }
      return false;
    } catch (e) {
      console.error('Failed to import JSON data', e);
      return false;
    }
  }

  resetToDefaults(): void {
    localStorage.removeItem(STORAGE_KEY_PROJECTS);
    localStorage.removeItem(STORAGE_KEY_SPREADS);
    this.projects.set([...DEFAULT_PROJECTS]);
    this.spreads.set([...DEFAULT_SPREADS]);
  }
}
