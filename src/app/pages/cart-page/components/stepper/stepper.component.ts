import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Step, StepItem } from '../../cart-page.model';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center items-center gap-x-2 lg:gap-x-4">
      @for (
        stepItem of stepList;
        track stepItem;
        let index = $index;
        let last = $last
      ) {
        <div class="flex gap-x-2">
          <div
            [ngClass]="{
              'bg-tmf-orange-1': stepItem.step === currentStep,
              'bg-tmf-gray-4': stepItem.step !== currentStep
            }"
            class="w-[23px] h-[23px] bg-tmf-orange-1 flex items-center justify-center rounded-full text-white text-[16px] leading-6"
          >
            {{ index + 1 }}
          </div>
          <p
            [ngClass]="{
              hidden: stepItem.step !== currentStep
            }"
            class="lg:block"
          >
            {{ stepItem.label }}
          </p>
        </div>
        @if (!last) {
          <div class="w-6 lg:w-[40px] border-b border-[#AAAAAA]"></div>
        }
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class StepperComponent {
  @Input() stepList: Array<StepItem> = [];
  @Input() currentStep!: Step;
}
