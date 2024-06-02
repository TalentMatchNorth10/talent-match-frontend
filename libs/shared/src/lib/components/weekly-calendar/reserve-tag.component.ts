import { NgClass } from '@angular/common';
import { Component, Input, input, computed } from '@angular/core';

type Status = 'unavailable' | 'available' | 'reserved';

@Component({
  selector: 'tmf-reserve-tag',
  standalone: true,
  imports: [NgClass],
  template: `
    @switch (status) {
      @case ('reserved') {
        <div
          class="flex justify-center items-center rounded-lg gap-1 px-[5px] py-3 xl:px-3 xl:py-3.5 bg-tmf-purple text-white"
        >
          <span
            class="text-base leading-[16px] xl:text-xl xl:leading-[20px] material-icons-outlined"
          >
            beenhere
          </span>
          <p class="text-xs xl:text-sm font-bold">已預約</p>
        </div>
      }
      @case ('available') {
        <div
          class="flex justify-center items-center rounded-lg py-3 px-[25.5px] bg-tmf-gray-7 xl:px-8"
        >
          <span
            class="text-base leading-4 xl:text-[24px] xl:leading-6 text-tmf-gray-1 material-icons-outlined"
          >
            add
          </span>
        </div>
      }
      @case ('unavailable') {
        <div
          class="flex justify-center items-center rounded-lg py-3 px-[25.5px] bg-tmf-gray-4 xl:px-8"
        >
          <span
            class="text-base leading-4 xl:text-[24px] xl:leading-6 text-white material-icons-outlined"
          >
            do_not_disturb_on
          </span>
        </div>
      }
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ReserveTagComponent {
  @Input({ required: true }) status!: Status;
}
