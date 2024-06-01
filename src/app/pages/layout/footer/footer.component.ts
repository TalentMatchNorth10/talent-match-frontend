import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="bg_image flex h-[372px] items-center justify-center bg-tmf-gray-1 px-5 lg:h-[248px]"
    >
      <div class="w-full max-w-[1280px]">
        <div
          class="mb-[48px] flex flex-col items-center lg:mb-3 lg:flex-row lg:items-end lg:justify-between"
        >
          <img
            class="mb-[29px] w-[200px] lg:mb-0"
            src="/assets/images/footer-logo.svg"
            alt=""
          />
          <ul
            class="flex flex-wrap justify-center gap-x-8 gap-y-5 text-[14px] leading-5 text-white"
          >
            <li class="cursor-pointer">教師招募</li>
            <li class="cursor-pointer">服務條款</li>
            <li class="cursor-pointer">關於我們</li>
            <li class="cursor-pointer">隱私權政策</li>
            <li class="cursor-pointer">使用者條款</li>
          </ul>
        </div>
        <div
          class="flex flex-col items-center gap-y-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <p
            class="order-2 text-center text-[14px] leading-5 text-white lg:order-1"
          >
            copyright © 2024 Zhong Feng Lin Fiber Technology Co.,Ltd
          </p>
          <ul class="order-1 flex gap-x-4 lg:order-2">
            <li
              class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-tmf-orange-2"
            >
              <img src="assets/images/line.png" alt="line" />
            </li>
            <li
              class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-tmf-orange-2"
            >
              <img src="assets/images/youtube.png" alt="youtube" />
            </li>
            <li
              class="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-tmf-orange-2"
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
