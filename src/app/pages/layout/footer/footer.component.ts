import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="h-[372px] lg:h-[248px] bg-tmf-gray-1 bg_image flex justify-center items-center px-5"
    >
      <div class="max-w-[1280px] w-full">
        <div
          class="flex flex-col items-center mb-[48px] lg:flex-row lg:justify-between lg:items-end lg:mb-3"
        >
          <img
            class="w-[200px] mb-[29px] lg:mb-0"
            src="/assets/images/footer-logo.svg"
            alt=""
          />
          <ul
            class="flex flex-wrap gap-x-8 gap-y-5 justify-center text-[14px] leading-5 text-white"
          >
            <li class="cursor-pointer">教師招募</li>
            <li class="cursor-pointer">服務條款</li>
            <li class="cursor-pointer">關於我們</li>
            <li class="cursor-pointer">隱私權政策</li>
            <li class="cursor-pointer">使用者條款</li>
          </ul>
        </div>
        <div
          class="flex items-center gap-y-4 flex-col lg:flex-row lg:justify-between lg:items-end"
        >
          <p
            class="text-[14px] text-center leading-5 text-white order-2 lg:order-1"
          >
            copyright © 2024 Zhong Feng Lin Fiber Technology Co.,Ltd
          </p>
          <ul class="flex gap-x-4 order-1 lg:order-2">
            <li
              class="w-[40px] h-[40px] border border-tmf-orange-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="assets/images/line.png" alt="line" />
            </li>
            <li
              class="w-[40px] h-[40px] border border-tmf-orange-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="assets/images/youtube.png" alt="youtube" />
            </li>
            <li
              class="w-[40px] h-[40px] border border-tmf-orange-2 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="assets/images/facebook.png" alt="facebook" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    .bg_image {
      background-image: url('/assets/images/footer-bg.png');
      background-size: auto 210px;
      background-repeat: no-repeat;
      background-position: bottom left;

      @media (max-width: 1024px) {
        background-size: auto 100%;
        background-position: bottom center;
      }
    }
  `
})
export class FooterComponent {}
