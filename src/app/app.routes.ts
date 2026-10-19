import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'THIVAGAR S.M — Architectural Portfolio'
  },
  { 
    path: 'project/:id', 
    component: ProjectDetailComponent,
    title: 'Project Details — THIVAGAR S.M Portfolio'
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
