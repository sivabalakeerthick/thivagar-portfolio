import { Component, computed, signal, OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { PortfolioService } from '../../core/services/portfolio.service';
import { LightboxService } from '../../core/services/lightbox.service';
import { Project, Spread } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  // Category Filter
  selectedCategory = signal<string>('All');

  // Book Viewer State
  currentSpreadIndex = signal<number>(0); // 0 to spreads.length - 1


  private scrollObserver?: IntersectionObserver;

  constructor(
    public portfolioService: PortfolioService,
    public lightboxService: LightboxService,
    private router: Router
  ) {}

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.initScrollReveal();
  }

  ngOnDestroy() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
  }

  private initScrollReveal() {
    this.scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.scrollObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe all reveal targets after a micro-delay for DOM readiness
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => this.scrollObserver?.observe(el));
    }, 100);
  }




  @HostListener('window:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT' || target.isContentEditable)) return;
    if (this.lightboxService.isOpen()) return;

    if (event.key === 'ArrowRight') {
      this.nextSpread();
    } else if (event.key === 'ArrowLeft') {
      this.prevSpread();
    }
  }

  // Categories list
  categories = [
    'All',
    'Master Planning & Mixed-Use',
    'Commercial High-Rise',
    'Hospitality Architecture',
    'Residential Architecture',
    'Working Drawings & Joinery'
  ];

  // Filtered Projects
  filteredProjects = computed<Project[]>(() => {
    const cat = this.selectedCategory();
    const list = this.portfolioService.projects();
    if (cat === 'All') return list;
    return list.filter(p => p.category === cat);
  });

  // Current Book Viewer Spread
  currentBookSpread = computed<Spread>(() => {
    const list = this.portfolioService.spreads();
    const idx = this.currentSpreadIndex();
    return list[idx] || list[0];
  });

  // Total pages
  totalPages = computed<number>(() => {
    return this.portfolioService.spreads().length;
  });

  selectCategory(category: string) {
    this.selectedCategory.set(category);
  }

  // Book Viewer Controls
  onSliderInput(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.setSpreadIndex(target.value);
    }
  }

  setSpreadIndex(idx: number | string) {
    const n = typeof idx === 'string' ? parseInt(idx, 10) : idx;
    if (isNaN(n)) return;
    const max = this.portfolioService.spreads().length - 1;
    this.currentSpreadIndex.set(Math.max(0, Math.min(max, n)));
  }

  jumpToSpread(pageNumber: number) {
    const list = this.portfolioService.spreads();
    const idx = list.findIndex(s => s.page === pageNumber);
    if (idx !== -1) {
      this.currentSpreadIndex.set(idx);
    }
  }

  nextSpread() {
    const max = this.portfolioService.spreads().length - 1;
    if (this.currentSpreadIndex() < max) {
      this.currentSpreadIndex.update(i => i + 1);
    } else {
      this.currentSpreadIndex.set(0);
    }
  }

  prevSpread() {
    const max = this.portfolioService.spreads().length - 1;
    if (this.currentSpreadIndex() > 0) {
      this.currentSpreadIndex.update(i => i - 1);
    } else {
      this.currentSpreadIndex.set(max);
    }
  }

  openLightboxForSpread(spread: Spread) {
    this.lightboxService.openSpread(spread);
  }

  openCurrentBookLightbox() {
    this.openLightboxForSpread(this.currentBookSpread());
  }

  openHeroSpread() {
    const spread = this.portfolioService.getSpreadByPage(6) || this.portfolioService.spreads()[0];
    if (spread) {
      this.openLightboxForSpread(spread);
    }
  }

  openCoverSpread(p: Project) {
    if (p.coverSpread) {
      const spread = this.portfolioService.getSpreadByPage(p.coverSpread);
      if (spread) {
        this.openLightboxForSpread(spread);
        return;
      }
    }
    if (p.customCoverImage) {
      this.lightboxService.openCustomImage({
        title: p.title,
        subtitle: p.category,
        url: p.customCoverImage,
        description: p.statement
      });
    }
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

