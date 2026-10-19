import { Component, HostListener, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrolled = false;
  mobileMenuOpen = false;
  currentRoute = signal<string>('/');
  activeSection = signal<string>('home');
  scrollProgress = signal<number>(0);

  private routerSub?: Subscription;

  // Trackable sections on home page
  private readonly sectionIds = ['home', 'projects', 'monograph', 'about', 'skills', 'contact'];

  constructor(
    public portfolioService: PortfolioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentRoute.set(this.router.url);
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute.set(event.urlAfterRedirects || event.url);
        if (this.currentRoute() === '/' || this.currentRoute() === '') {
          this.determineActiveSection();
        } else if (this.currentRoute().startsWith('/project')) {
          this.activeSection.set('projects');
        }
      });

    this.updateScrollMetrics();
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateScrollMetrics();
  }

  private updateScrollMetrics() {
    const scrollY = window.scrollY;
    this.scrolled = scrollY > 40;

    // Calculate precision scroll progress percentage (0 - 100)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const pct = Math.min(100, Math.max(0, (scrollY / docHeight) * 100));
      this.scrollProgress.set(Math.round(pct));
    }

    if (this.currentRoute() === '/' || this.currentRoute() === '') {
      this.determineActiveSection();
    }
  }

  private determineActiveSection() {
    const scrollPos = window.scrollY + 220; // Anticipate top header line
    let current = 'home';

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = id;
          break;
        }
      }
    }

    // Special edge case: If at very bottom of document, activate contact
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
      current = 'contact';
    }

    this.activeSection.set(current);
  }

  isSectionActive(section: string): boolean {
    if (section === 'projects') {
      return this.activeSection() === 'projects' || this.currentRoute().startsWith('/project');
    }
    if (section === 'monograph') {
      return this.activeSection() === 'monograph';
    }
    if (section === 'about') {
      return this.activeSection() === 'about';
    }
    if (section === 'skills') {
      return this.activeSection() === 'skills';
    }
    if (section === 'contact') {
      return this.activeSection() === 'contact';
    }
    if (section === 'admin') {
      return this.currentRoute().startsWith('/admin');
    }
    return this.activeSection() === section;
  }

  @HostListener('window:keydown.escape')
  handleEscape() {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  navigateToSection(sectionId: string) {
    this.closeMobileMenu();
    if (this.router.url !== '/' && this.router.url !== '') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 120);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      this.activeSection.set(id);
    }
  }
}
