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
        class="group relative m-auto w-[320px] overflow-hidden rounded-xl bg-white shadow-lg md:w-[320px] lg:w-[302px]"
      >
        <div class="h-[180px] w-full bg-tmf-gray-4">
          @if (data.avatar) {
            <img
              class="h-full w-full object-cover"
              [src]="data.mainImg"
              alt=""
            />
          }
        </div>
        <div class="p-4">
          <h3
            class="mb-2 text-[18px] font-bold leading-7 text-tmf-gray-2 md:text-[24px] md:leading-8"
          >
            {{ data.title ? data.title : '' }}
          </h3>
          <p
            class="line-clamp-3 min-h-[60px] text-[14px] leading-5 text-tmf-gray-3 md:min-h-[72px] md:text-[16px] md:leading-6"
          >
            {{ data.content ? data.content : '' }}
          </p>
        </div>
        <div class="flex items-center border-y border-tmf-gray-5 p-4">
          <div
            class="mr-2 h-8 w-8 shrink-0 overflow-hidden rounded-full bg-tmf-gray-4"
          >
            @if (data.avatar) {
              <img
                class="h-full w-full cursor-pointer"
                [src]="data.avatar"
                alt="avator_image"
                (click)="navigateToTeacherPage(data)"
              />
            }
          </div>
          <p
            class="mr-[31px] cursor-pointer text-[14px] font-medium leading-5 text-tmf-gray-3 md:text-[16px] md:leading-6"
            (click)="navigateToTeacherPage(data)"
          >
            {{ data.name ? data.name : '' }}
          </p>
          <p class="text-[16px] leading-6 text-tmf-orange-1">
            NT$ {{ data.price ? data.price.toLocaleString() : '' }}
            <span class="mr-1 text-[14px] leading-5 text-tmf-gray-2"
              >/ {{ data.quantity ? data.quantity : '' }}堂</span
            >
          </p>
        </div>
        <div class="flex items-center justify-start p-4">
          <div class="mr-4 flex flex-col items-start text-[14px] leading-5">
            <p class="text-tmf-gray-4">類型</p>
            <p class="font-bold text-black">
              {{ data.main_category ? data.main_category : '' }}－{{
                data.sub_category ? data.sub_category : ''
              }}
            </p>
          </div>
          <div class="mr-4 flex flex-col items-start text-[14px] leading-5">
            <p class="text-tmf-gray-4">評分</p>
            <div class="flex items-center gap-1">
              <tmf-star-rating [rating]="data.rating"></tmf-star-rating>
              <p
                class="flex items-center gap-1 pb-[2px] text-[14px] font-medium leading-5"
              >
                <span class="text-black">{{
                  data.rating ? data.rating : ''
                }}</span>
                <span class="text-tmf-gray-3"
                  >({{ data.ratingCount ? data.ratingCount : '' }})</span
                >
              </p>
            </div>
          </div>
          <div class="flex h-full flex-grow justify-end">
            <span
              class="material-icons-outlined cursor-pointer text-[20px] text-tmf-gray-4"
              (click)="navigateToCoursePage(data)"
            >
              east
            </span>
          </div>
        </div>

        <!-- hover -->
        @if (hoverEffect) {
          <div class="absolute left-0 top-0 h-full w-full">
            <div
              class="absolute left-0 top-0 h-full w-full bg-transparent duration-100 group-hover:bg-[#180000]/50 group-hover:backdrop-blur-sm"
            ></div>
            <div
              class="invisible relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 duration-100 group-hover:visible"
            >
              <button
                class="flex h-[40px] w-[114px] items-center justify-center rounded-lg bg-tmf-orange-1 text-white"
              >
                加入購物車
              </button>
              <button
                class="flex h-[40px] w-[114px] items-center justify-center rounded-lg bg-white"
              >
                瀏覽課程
              </button>
              <button
                class="flex h-[40px] w-[114px] items-center justify-center rounded-lg bg-white"
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

  navigateToTeacherPage(data: CardData): void {
    // console.log(data.course_id)
    this.router.navigate([`teacher-detail/{data.teacher_id}`]);
  }
}
