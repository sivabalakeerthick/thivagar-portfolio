import { Injectable, signal, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Spread } from '../models/portfolio.models';
import { PortfolioService } from './portfolio.service';

export interface CustomLightboxImage {
  title: string;
  subtitle?: string;
  url: string;
  type?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  readonly isOpen = signal<boolean>(false);
  readonly currentSpread = signal<Spread | null>(null);
  readonly scopeSpreads = signal<Spread[] | null>(null);
  readonly customImage = signal<CustomLightboxImage | null>(null);
  readonly zoom = signal<number>(1);
  readonly infoOpen = signal<boolean>(true);

  constructor(private portfolioService: PortfolioService) {
    const router = inject(Router, { optional: true });
    if (router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationStart && this.isOpen()) {
          this.close();
        }
      });
    }
  }

  openSpread(spread: Spread, scope?: Spread[]): void {
    this.customImage.set(null);
    this.currentSpread.set(spread);
    this.scopeSpreads.set(scope && scope.length > 0 ? scope : null);
    this.zoom.set(1);
    this.isOpen.set(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  openCustomImage(image: CustomLightboxImage): void {
    this.currentSpread.set(null);
    this.scopeSpreads.set(null);
    this.customImage.set(image);
    this.zoom.set(1);
    this.isOpen.set(true);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  close(): void {
    this.isOpen.set(false);
    this.currentSpread.set(null);
    this.scopeSpreads.set(null);
    this.customImage.set(null);
    this.zoom.set(1);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  toggleInfo(): void {
    this.infoOpen.update(v => !v);
  }

  zoomIn(): void {
    this.zoom.update(z => Math.min(3, +(z + 0.35).toFixed(2)));
  }

  zoomOut(): void {
    this.zoom.update(z => Math.max(0.7, +(z - 0.35).toFixed(2)));
  }

  resetZoom(): void {
    this.zoom.set(1);
  }

  next(): void {
    const spread = this.currentSpread();
    if (!spread) return;

    const list = this.scopeSpreads() || this.portfolioService.spreads();
    const idx = list.findIndex(s => s.page === spread.page);
    if (idx !== -1 && idx < list.length - 1) {
      this.currentSpread.set(list[idx + 1]);
      this.zoom.set(1);
    } else if (idx === list.length - 1 && list.length > 0) {
      this.currentSpread.set(list[0]);
      this.zoom.set(1);
    }
  }

  prev(): void {
    const spread = this.currentSpread();
    if (!spread) return;

    const list = this.scopeSpreads() || this.portfolioService.spreads();
    const idx = list.findIndex(s => s.page === spread.page);
    if (idx > 0) {
      this.currentSpread.set(list[idx - 1]);
      this.zoom.set(1);
    } else if (idx === 0 && list.length > 0) {
      this.currentSpread.set(list[list.length - 1]);
      this.zoom.set(1);
    }
  }
}
