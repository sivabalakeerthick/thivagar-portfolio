export interface SubComponent {
  name: string;
  role: string;
  spreads: number[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  siteArea: string;
  builtUpArea?: string;
  typology?: string;
  software?: string;
  year?: string;
  period?: string;
  heroSpread?: number;
  coverSpread?: number;
  customCoverImage?: string;
  spreadStart: number;
  spreadEnd: number;
  spreadCount: number;
  subComponents?: SubComponent[];
  statement: string;
  highlights?: string[];
  isCustom?: boolean;
}

export interface Spread {
  page: number;
  title: string;
  category: string;
  projectId: string;
  subProject?: string | null;
  type: string;
  description: string;
  tags: string[];
  fullImage: string;
  mediumImage: string;
  thumbImage: string;
  width: number;
  height: number;
  isCustom?: boolean;
}

export interface CandidateContact {
  phone: string;
  email: string;
  linkedin: string;
}

export interface SoftwareSkill {
  name: string;
  category: string;
  level: number;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface EducationItem {
  degree?: string;
  qualification?: string;
  institution: string;
  period?: string;
  year?: string;
}

export interface WorkshopItem {
  year: string;
  title: string;
  conducted_by: string;
}

export interface ExplorationItem {
  year: string;
  title: string;
  type: string;
}

export interface ExperienceItem {
  role: string;
  firm: string;
  location: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface Candidate {
  name: string;
  degree: string;
  institution: string;
  academic_years: string;
  location: string;
  contact: CandidateContact;
  languages: Language[];
  software_skills: SoftwareSkill[];
  core_competencies: string[];
  education: EducationItem[];
  workshops: WorkshopItem[];
  explorations: ExplorationItem[];
  experience: ExperienceItem[];
}

export interface SiteMetrics {
  totalProjects: number;
  portfolioPages: number;
  academicYears: string;
  competencyCount: number;
  softwareCount: number;
}
