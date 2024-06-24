import { CommonService } from './../../../../../../libs/openapi/src/api/common.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  ApiCommonSearchResultAllGetRequestParams,
  CityResponseModelDataInner,
  SearchResponseModelData,
  SearchResponseModelDataCoursesInner
} from 'libs/openapi/src';
import { SortType } from '../../result-keyword-page.model';
import {
  OptionComponent,
  PaginationComponent,
  SelectComponent
} from '@tmf/libs-shared/components';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, filter, map, tap } from 'rxjs';

@Component({
  selector: 'result-course-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    StarRatingComponent,
    PaginationComponent,
    SelectComponent,
    FormsModule,
    OptionComponent
  ],
  template: `<div class="relative">
    <div class="mx-auto px-4 xl:container xl:w-[1280px] xl:px-0">
      @if (data) {
        <div
          class="flex flex-wrap items-center justify-start gap-6 pt-10 lg:flex-nowrap"
        >
          <div
            class="w-full text-center text-3xl font-bold sm:text-left lg:w-auto"
          >
            共 {{ data.total }} 筆與「
            <span class="text-tmf-purple">{{ emphasisText }}</span>
            」相關課程
          </div>
          @if (canCity) {
            <div class="m-auto w-40 shrink-0 sm:m-0">
              <tmf-select
                [icon]="'pin_drop'"
                [(ngModel)]="cityId"
                placeholder="探索全部"
                (selectChange)="cityIdChange.emit($event)"
              >
                <tmf-option [value]="'all'" [label]="'探索全部'"></tmf-option>

                @for (option of cityOptions; track option) {
                  <tmf-option
                    [value]="option.value"
                    [label]="option.label"
                  ></tmf-option>
                }
              </tmf-select>
            </div>
          }
          @if (data.total) {
            <div class="shrink-0 grow text-center sm:text-right">
              <div class="inline-block border-r border-tmf-gray-5 p-[4px_16px]">
                <span
                  [ngClass]="{
                    'sort-active':
                      query.sort != SortType.HIT &&
                      query.sort != SortType.CHEAP,
                    'cursor-pointer': query.sort != SortType.NEW
                  }"
                  class="text-base font-normal text-tmf-gray-3"
                  (click)="sortChange.emit(SortType.NEW)"
                >
                  最新課程
                </span>
              </div>
              <div class="inline-block border-r border-tmf-gray-5 p-[4px_16px]">
                <span
                  [ngClass]="{
                    'sort-active': query.sort === SortType.HIT,
                    'cursor-pointer': query.sort != SortType.HIT
                  }"
                  class="text-base font-normal text-tmf-gray-3 active:font-bold"
                  (click)="sortChange.emit(SortType.HIT)"
                >
                  最高人氣
                </span>
              </div>
              <div class="inline-block p-[4px_16px]">
                <span
                  [ngClass]="{
                    'sort-active': query.sort === SortType.CHEAP,
                    'cursor-pointer': query.sort != SortType.CHEAP
                  }"
                  class="text-base font-normal text-tmf-gray-3"
                  (click)="sortChange.emit(SortType.CHEAP)"
                >
                  最低價格
                </span>
              </div>
            </div>
          }
        </div>
        @if (data.total) {
          <div
            class="mx-auto flex w-auto flex-wrap justify-center gap-4 pt-10 md:grid md:w-[670px] md:grid-cols-2 lg:w-[950px] lg:grid-cols-3 xl:w-auto xl:grid-cols-4"
          >
            @for (item of data.courses; track $index) {
              <tmf-card
                [data]="transformToCardData(item)"
                [hoverEffect]="false"
              ></tmf-card>
            }
          </div>
          <div class="mt-10 py-6 text-center">
            <tmf-pagination
              [config]="{
                totalItems: data.total,
                itemsPerPage: query.size || 10,
                currentPage: toInt(query.page) || 1,
                showFirstButton: true,
                showLastButton: true,
                showPrevButton: true,
                showNextButton: true
              }"
              (pageChange)="pageChange.emit($event)"
            ></tmf-pagination>
          </div>
        } @else {
          <div class="flex h-[644px] flex-col items-center pt-10">
            <img src="assets/images/search_none.png" alt="" />
            <span
              class="mt-6 text-lg font-bold tracking-[0.02em] text-tmf-gray-3"
              >哎呀！目前沒有和 {{ emphasisText }} 相關的課程</span
            >
          </div>
        }
      } @else {
        <div class="flex h-[644px] flex-col items-center pt-[112px]">
          <img src="assets/images/search_none.png" alt="" />
          <span class="mt-6 text-lg font-bold tracking-[0.02em] text-tmf-gray-3"
            >搜尋中</span
          >
        </div>
      }
    </div>
  </div>`,
  styleUrl: './result-course-list.component.css'
})
export class ResultCourseListComponent {
  private commonService = inject(CommonService);
  private route = inject(ActivatedRoute);
  @Input() data?: SearchResponseModelData;
  @Input() query!: ApiCommonSearchResultAllGetRequestParams;
  @Output() pageChange = new EventEmitter();
  @Output() sortChange = new EventEmitter();
  @Output() cityIdChange = new EventEmitter();
  @Input() canCity = false;
  get emphasisText() {
    return (
      this.query.keyword ||
      this.query.subCategory ||
      this.query.mainCategory ||
      '所有類別'
    );
  }
  readonly SortType = SortType;
  cityId?: string;
  cityOptions?: CityResponseModelDataInner[];
  cityOptions$ = new ReplaySubject<CityResponseModelDataInner[]>();
  transformToCardData(course: SearchResponseModelDataCoursesInner): CardData {
    return {
      ...course,
      course_id: course._id,
      mainImg: course.main_image,
      title: course.name,
      name: course.teacher_name,
      avatar: course.avator_image,
      price: course.price_unit,
      rate: course.rate_avg,
      ratingCount: course.review_count || 0
    };
  }
  ngOnInit(): void {
    if (this.canCity) {
      this.commonService
        .apiCommonOptionsCityPost({
          cityRequestModel: {
            is_oversea: false
          }
        })
        .pipe(
          map((d) => d.data),
          tap((d) => (this.cityOptions = d))
        )
        .subscribe(this.cityOptions$);
      this.route.queryParams
        .pipe(
          map((qp) => qp['cityId']),
          filter((cityId) => cityId)
        )
        .subscribe((cityId) => {
          this.cityId = cityId;
        });
    }
  }
  toInt(page: any) {
    return Number(page);
  }
}
