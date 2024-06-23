import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'tmf-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center">
      <span
        *ngFor="let star of fullStars"
        class="material-icons-outlined text-tmf-yellow-1"
        [ngClass]="starFontSize(starSize)"
      >
        star
      </span>
      <span
        *ngIf="halfStars"
        class="material-icons-outlined text-tmf-yellow-1"
        [ngClass]="starFontSize(starSize)"
      >
        star_half
      </span>
      <span
        *ngFor="let star of emptyStars"
        class="material-icons-outlined"
        [ngClass]="starFontSize(starSize)"
      >
        star_border
      </span>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() starSize: string = '12px';
  fullStars: number[] = [];
  halfStars: number = 0;
  emptyStars: number[] = [];

  starFontSize(size: string): string {
    return `text-[${size}]`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) {
      this.updateStars();
    }
  }

  updateStars(): void {
    const fullStarsCount = Math.floor(this.rating);
    const decimalPart = this.rating - fullStarsCount;

    this.fullStars = Array(fullStarsCount).fill(0);
    this.halfStars = decimalPart >= 0.5 ? 1 : 0;
    this.emptyStars = Array(5 - fullStarsCount - this.halfStars).fill(0);
  }
}
