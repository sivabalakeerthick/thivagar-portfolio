import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxService } from '../../core/services/lightbox.service';
import { PortfolioService } from '../../core/services/portfolio.service';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  constructor(
    public lightbox: LightboxService,
    public portfolioService: PortfolioService
  ) {}

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.lightbox.isOpen()) return;

    if (event.key === 'Escape') {
      this.lightbox.close();
    } else if (event.key === 'ArrowRight') {
      this.lightbox.next();
    } else if (event.key === 'ArrowLeft') {
      this.lightbox.prev();
    } else if (event.key === '+' || event.key === '=') {
      this.lightbox.zoomIn();
    } else if (event.key === '-' || event.key === '_') {
      this.lightbox.zoomOut();
    }
  }

  get currentImageUrl(): string {
    const custom = this.lightbox.customImage();
    if (custom) return custom.url;

    const spread = this.lightbox.currentSpread();
    if (spread) return spread.fullImage;

    return '';
  }

  get currentTitle(): string {
    const custom = this.lightbox.customImage();
    if (custom) return custom.title;

    const spread = this.lightbox.currentSpread();
    if (spread) return spread.title;

    return 'Architectural Drawing Sheet';
  }

  get currentSubtitle(): string {
    const custom = this.lightbox.customImage();
    if (custom) return custom.subtitle || custom.type || 'Architectural Asset';

    const spread = this.lightbox.currentSpread();
    if (spread) return `${spread.category} &bull; Sheet #${spread.page}`;

    return '';
  }

  get currentDescription(): string {
    const custom = this.lightbox.customImage();
    if (custom) return custom.description || '';

    const spread = this.lightbox.currentSpread();
    if (spread) return spread.description || '';

    return '';
  }

  get currentTags(): string[] {
    const spread = this.lightbox.currentSpread();
    if (spread && spread.tags) return spread.tags;
    return [];
  }

  get scopeIndicator(): string {
    const scope = this.lightbox.scopeSpreads();
    const spread = this.lightbox.currentSpread();
    if (!spread) return '';

    if (scope && scope.length > 0) {
      const idx = scope.findIndex(s => s.page === spread.page);
      const pos = idx >= 0 ? idx + 1 : 1;
      return `DRAWING ${pos} / ${scope.length} &bull; SHEET #${spread.page}`;
    }
    const total = this.portfolioService.spreads().length;
    return `SHEET ${spread.page} / ${total}`;
  }
}
