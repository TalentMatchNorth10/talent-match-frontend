import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CardData, HoverButton, HoverButtonClickEvent } from './card.interface';
import { Router } from '@angular/router';
import { HideOnErrorDirective } from 'src/app/shared/directive/hide-on-error.directive';

@Component({
  selector: 'tmf-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, HideOnErrorDirective],
  template: `
    @if (data) {
      <div
        class="group relative m-auto w-[320px] overflow-hidden rounded-xl bg-white shadow-lg md:w-[320px] lg:w-[302px]"
      >
        <div class="h-[180px] w-full bg-tmf-gray-4">
          @if (data.main_image) {
            <img
              appHideOnError
              class="h-full w-full object-cover"
              [src]="data.main_image"
              alt=""
            />
          }
        </div>
        <div class="p-4">
          <h3
            class="w mb-2 line-clamp-2 h-[64px] text-[18px] font-bold leading-7 text-tmf-gray-2 md:text-[24px] md:leading-8"
          >
            {{ data.title ? data.title : '' }}
          </h3>
          <div
            class="line-clamp-3 min-h-[60px] text-[14px] leading-5 text-tmf-gray-3 md:min-h-[72px] md:text-[16px] md:leading-6"
            [innerHTML]="data.content ? data.content : ''"
          ></div>
        </div>
        <div
          class="flex items-center justify-between border-y border-tmf-gray-5 p-4"
        >
          <span class="flex items-center">
            <div
              class="mr-2 h-8 w-8 shrink-0 overflow-hidden rounded-full bg-tmf-gray-4"
            >
              @if (data.avatar) {
                <img
                  appHideOnError
                  class="h-full w-full cursor-pointer object-cover"
                  [src]="data.avatar"
                  alt="avator_image"
                  (click)="navigateToTeacherPage(data)"
                />
              }
            </div>
            <p
              class="mr-[31px] cursor-pointer whitespace-nowrap text-[14px] font-medium leading-5 text-tmf-gray-3 md:text-[16px] md:leading-6"
              (click)="navigateToTeacherPage(data)"
            >
              {{ data.name ? data.name : '' }}
            </p>
          </span>
          <p class="text-[16px] leading-6 text-tmf-orange-1">
            NT$
            {{ data.price ? data.price.toLocaleString() : '' }}
            <span class="mr-1 text-[14px] leading-5 text-tmf-gray-2"
              >/ {{ data.quantity ? data.quantity : '' }}堂</span
            >
          </p>
        </div>
        <div class="flex items-center justify-start p-4">
          <div class="mr-4 flex flex-col items-start text-[14px] leading-5">
            <p class="text-tmf-gray-4">類型</p>
            <p class="text-xs font-bold text-black">
              {{ data.main_category ? data.main_category : '' }}－{{
                data.sub_category ? data.sub_category : ''
              }}
            </p>
          </div>
          <div class="mr-4 flex flex-col items-start text-[14px] leading-5">
            <p class="text-tmf-gray-4">評分</p>
            <div class="flex items-center gap-1">
              <tmf-star-rating [rating]="data.rate"></tmf-star-rating>
              <p
                class="flex items-center gap-1 pb-[2px] text-[14px] font-medium leading-5"
              >
                <span class="text-black">{{ data.rate ? data.rate : '' }}</span>
                <span class="text-tmf-gray-3"
                  >({{ data.ratingCount ? data.ratingCount : 0 }})</span
                >
              </p>
            </div>
          </div>
          <div class="flex h-full flex-grow justify-end">
            <span
              class="material-icons-outlined origin-center cursor-pointer text-[20px] text-tmf-gray-4 duration-100 active:!scale-95 group-hover:scale-[110%] group-hover:text-tmf-orange-1"
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
              @for (button of hoverButtons; track button) {
                <button
                  (click)="
                    hoverButtonClick.emit({
                      eventType: button.eventType,
                      data: data
                    })
                  "
                  [ngClass]="{
                    'bg-tmf-orange-1 text-white': button.color === 'primary',
                    'bg-white text-tmf-gray-2': button.color === 'white'
                  }"
                  class="flex h-[40px] w-[114px] items-center justify-center rounded-lg"
                >
                  {{ button.text }}
                </button>
              }
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
  @Input() hoverButtons: HoverButton[] = [
    {
      text: '瀏覽課程',
      eventType: 'view',
      color: 'primary'
    },
    {
      text: '移除課程',
      eventType: 'remove',
      color: 'white'
    }
  ];

  @Output() hoverButtonClick = new EventEmitter<HoverButtonClickEvent>();

  constructor(protected readonly router: Router) {}

  navigateToCoursePage(data: CardData): void {
    this.router.navigate([`course-detail/${data.course_id}`]);
  }

  navigateToTeacherPage(data: CardData): void {
    this.router.navigate([`detail-teacher/${data.teacher_id}`]);
  }
}
