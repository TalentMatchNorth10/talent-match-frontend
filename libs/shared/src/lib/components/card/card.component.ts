import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CardData } from './card.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'tmf-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  template: `
    @if (data) {
      <div
        class="m-auto lg:w-[302px] md:w-[320px] w-[320px] rounded-xl overflow-hidden bg-white shadow-lg relative group"

      >
        <div class="w-full h-[180px] bg-tmf-gray-4">
          @if (data.avatar) {
            <img
              class="w-full h-full object-cover"
              [src]="data.mainImg"
              alt=""
            />
          }
        </div>
        <div class="p-4">
          <h3
            class="text-[18px] leading-7 md:text-[24px] md:leading-8 text-tmf-gray-2 font-bold mb-2"
          >
            {{ data.title ? data.title : '' }}
          </h3>
          <p
            class="text-[14px] leading-5 md:text-[16px] md:leading-6 text-tmf-gray-3 line-clamp-3 min-h-[60px] md:min-h-[72px]"
          >
            {{ data.content ? data.content : '' }}
          </p>
        </div>
        <div class="p-4 flex items-center border-y border-tmf-gray-5">
          <div
            class="w-8 h-8 bg-tmf-gray-4 rounded-full overflow-hidden mr-2 shrink-0"
          >
            @if (data.avatar) {
              <img
                class="w-full h-full"
                [src]="data.avatar"
                alt="avator_image"
              />
            }
          </div>
          <p
            class="text-[14px] leading-5 md:text-[16px] md:leading-6 text-tmf-gray-3 font-medium mr-[31px]"
          >
            {{ data.name ? data.name : '' }}
          </p>
          <p class="text-[16px] leading-6 text-tmf-orange-1">
            NT$ {{ data.price ? data.price.toLocaleString() : '' }}
            <span class="text-[14px] leading-5 text-tmf-gray-2 mr-1"
              >/ {{ data.quantity ? data.quantity : '' }}堂</span
            >
          </p>
        </div>
        <div class="p-4 flex justify-start items-center">
          <div class="flex flex-col items-start text-[14px] leading-5 mr-4">
            <p class="text-tmf-gray-4">類型</p>
            <p class="text-black font-bold">
              {{ data.main_category ? data.main_category : '' }}－{{
                data.sub_category ? data.sub_category : ''
              }}
            </p>
          </div>
          <div class="flex flex-col items-start text-[14px] leading-5 mr-4">
            <p class="text-tmf-gray-4">評分</p>
            <div class="flex items-center gap-1">
              <tmf-star-rating [rating]="data.rating"></tmf-star-rating>
              <p
                class="text-[14px] leading-5 pb-[2px] flex items-center font-medium gap-1"
              >
                <span class="text-black">{{
                  data.rating ? data.rating : ''
                }}</span>
                <span class=" text-tmf-gray-3"
                  >({{ data.ratingCount ? data.ratingCount : '' }})</span
                >
              </p>
            </div>
          </div>
          <div class="h-full flex justify-end flex-grow">
            <span
              class="material-icons-outlined text-[20px] text-tmf-gray-4 cursor-pointer"
              (click)="navigateToCoursePage(data)"
            >
              east
            </span>
          </div>
        </div>

        <!-- hover -->
        @if (hoverEffect) {
          <div class="w-full h-full absolute left-0 top-0">
            <div
              class="absolute left-0 top-0 bg-transparent w-full h-full duration-100 group-hover:bg-[#180000]/50 group-hover:backdrop-blur-sm"
            ></div>
            <div
              class="flex flex-col justify-center items-center gap-2 w-full h-full relative z-10 invisible group-hover:visible duration-100"
            >
              <button
                class="h-[40px] w-[114px] flex items-center justify-center bg-tmf-orange-1 text-white rounded-lg"
              >
                加入購物車
              </button>
              <button
                class="h-[40px] w-[114px] flex items-center bg-white justify-center rounded-lg"
              >
                瀏覽課程
              </button>
              <button
                class="h-[40px] w-[114px] flex items-center bg-white justify-center rounded-lg"
              >
                移除課程
              </button>
            </div>
          </div>
        }
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class CardComponent {
  @Input() data!: CardData;
  @Input() hoverEffect: boolean = true;

  constructor(protected readonly router: Router) {}

  navigateToCoursePage(data: CardData): void {
    // console.log(data.course_id)
    this.router.navigate([`course-detail/${data.course_id}`]);
  }
}
