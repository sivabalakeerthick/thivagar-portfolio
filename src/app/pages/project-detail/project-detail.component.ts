import { Component, OnInit, OnDestroy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PortfolioService } from '../../core/services/portfolio.service';
import { LightboxService } from '../../core/services/lightbox.service';
import { Project, Spread } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  projectId = signal<string>('');
  selectedDrawingType = signal<string>('All');
  viewMode = signal<'grid' | 'editorial'>('grid');
  private routeSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public portfolioService: PortfolioService,
    public lightboxService: LightboxService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.projectId.set(id);
        this.selectedDrawingType.set('All');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe();
  }

  // Current project
  project = computed<Project | undefined>(() => {
    return this.portfolioService.getProjectById(this.projectId());
  });

  // Only the spreads/images belonging to this project!
  projectSpreads = computed<Spread[]>(() => {
    return this.portfolioService.getSpreadsForProject(this.projectId());
  });

  // Unique drawing types within this project
  drawingTypes = computed<string[]>(() => {
    const set = new Set<string>();
    this.projectSpreads().forEach(s => {
      if (s.type) set.add(s.type);
    });
    return ['All', ...Array.from(set)];
  });

  // Filtered drawings
  filteredDrawings = computed<Spread[]>(() => {
    const type = this.selectedDrawingType();
    const spreads = this.projectSpreads();
    if (type === 'All') return spreads;
    return spreads.filter(s => s.type === type);
  });

  // Previous and next projects for navigation
  prevProject = computed<Project | undefined>(() => {
    const list = this.portfolioService.projects();
    const idx = list.findIndex(p => p.id === this.projectId());
    if (idx > 0) return list[idx - 1];
    return undefined;
  });

  nextProject = computed<Project | undefined>(() => {
    const list = this.portfolioService.projects();
    const idx = list.findIndex(p => p.id === this.projectId());
    if (idx !== -1 && idx < list.length - 1) return list[idx + 1];
    return undefined;
  });

  selectType(type: string) {
    this.selectedDrawingType.set(type);
  }

  toggleViewMode(mode: 'grid' | 'editorial') {
    this.viewMode.set(mode);
  }

  openSheet(spread: Spread) {
    this.lightboxService.openSpread(spread, this.filteredDrawings());
  }
}
