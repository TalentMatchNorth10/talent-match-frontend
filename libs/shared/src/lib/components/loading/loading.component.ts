import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'tmf-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isLoading | async) {
      <div
        class="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center rounded-2xl bg-tmf-gray-6/50"
      >
        <img
          class="h-[60px] w-[60px] animate-spin text-tmf-orange-1"
          src="/assets/images/loading.svg"
          alt=""
        />
      </div>
    }
  `,
  styles: []
})
export class LoadingComponent {
  private loadingService = inject(LoadingService);

  isLoading = this.loadingService.loading$;
}
