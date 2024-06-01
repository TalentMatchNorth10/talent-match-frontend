import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationConfig } from './pagination.model';

@Component({
  selector: 'tmf-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav aria-label="Page navigation example">
      <ul class="page-list">
        @if (config.showFirstButton || config.showFirstButton === undefined) {
          <li
            class="page-item"
            [ngClass]="{
              disabled: currentPage === 1
            }"
          >
            <a class="page-link" href="#" (click)="firstPage($event)">
              <span class="material-symbols-outlined">
                keyboard_double_arrow_left
              </span>
            </a>
          </li>
        }
        @if (config.showPrevButton || config.showPrevButton === undefined) {
          <li
            class="page-item"
            [ngClass]="{
              disabled: currentPage === 1
            }"
          >
            <a class="page-link" href="#" (click)="previousPage($event)">
              <span class="material-symbols-outlined"> chevron_left </span>
            </a>
          </li>
        }
        <li
          class="page-item"
          *ngFor="let page of pages"
          [class.active]="page === currentPage"
        >
          <a
            class="page-link"
            href="#"
            (click)="selectPage($event, page)"
            [attr.aria-label]="page === '...' ? 'More pages' : 'Page ' + page"
          >
            {{ page }}
          </a>
        </li>
        @if (config.showNextButton || config.showNextButton === undefined) {
          <li
            class="page-item"
            [ngClass]="{
              disabled: currentPage === totalPages
            }"
          >
            <a class="page-link" href="#" (click)="nextPage($event)">
              <span class="material-symbols-outlined"> chevron_right </span>
            </a>
          </li>
        }
        @if (config.showLastButton || config.showLastButton === undefined) {
          <li
            class="page-item"
            [ngClass]="{
              disabled: currentPage === totalPages
            }"
          >
            <a class="page-link" href="#" (click)="lastPage($event)">
              <span class="material-symbols-outlined">
                keyboard_double_arrow_right
              </span>
            </a>
          </li>
        }
      </ul>
    </nav>
  `,
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnInit {
  @Input() config: PaginationConfig = {
    totalItems: 0,
    itemsPerPage: 0,
    currentPage: 1,
    maxPageDisplay: 5,
    showFirstButton: true,
    showLastButton: true,
    showPrevButton: true,
    showNextButton: true
  };
  @Output() pageChange = new EventEmitter<number>();

  pages: Array<number | string> = [];
  currentPage!: number;
  totalPages!: number;

  ngOnInit(): void {
    this.currentPage = this.config.currentPage || 1;
    this.totalPages = Math.ceil(
      this.config.totalItems / this.config.itemsPerPage
    );
    this.calculatePages();
  }

  calculatePages(): void {
    this.pages = [];
    const maxPageDisplay = this.config.maxPageDisplay || 5;

    if (this.totalPages <= maxPageDisplay) {
      for (let i = 1; i <= this.totalPages; i++) {
        this.pages.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        this.currentPage - Math.floor(maxPageDisplay / 2)
      );
      let endPage = Math.min(startPage + maxPageDisplay - 1, this.totalPages);

      if (endPage >= this.totalPages) {
        endPage = this.totalPages;
        startPage = Math.max(1, endPage - maxPageDisplay + 1);
      }

      if (startPage > 1) {
        this.pages.push(1);
        if (startPage > 2) this.pages.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        this.pages.push(i);
      }

      if (endPage < this.totalPages) {
        if (endPage < this.totalPages - 1) this.pages.push('...');
        this.pages.push(this.totalPages);
      }
    }
  }

  selectPage(event: MouseEvent, page: number | string): void {
    event.preventDefault();
    if (typeof page === 'number' && page !== this.currentPage) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
      this.calculatePages();
    }
  }

  nextPage(event: MouseEvent): void {
    event.preventDefault();
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
      this.calculatePages();
    }
  }

  previousPage(event: MouseEvent): void {
    event.preventDefault();
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
      this.calculatePages();
    }
  }

  firstPage(event: MouseEvent): void {
    event.preventDefault();
    this.currentPage = 1;
    this.pageChange.emit(this.currentPage);
    this.calculatePages();
  }

  lastPage(event: MouseEvent): void {
    event.preventDefault();
    this.currentPage = this.totalPages;
    this.pageChange.emit(this.currentPage);
    this.calculatePages();
  }
}
