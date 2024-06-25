import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject
} from '@angular/core';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import {
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  ReviewCardComponent,
  SearchType,
  SearchTypeEnum,
  SelectComponent,
  ShortVideoCardComponent
} from 'libs/shared/src';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { ReviewData } from '@tmf/libs-shared/components/review-card/review.interface';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import {
  ApiHomeCourseVideosAllGetRequestParams,
  ApiHomeCoursesAllGetRequestParams,
  CommonService,
  HomeService,
  TagsResponseModelDataInner
} from 'libs/openapi/src';
import { ReplaySubject, tap } from 'rxjs';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShortVideoCardComponent,
    CardComponent,
    StarRatingComponent,
    ReviewCardComponent,
    SelectComponent,
    OptionComponent,
    InputComponent,
    VideoCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export default class HomePageComponent implements OnInit, AfterViewInit {
  private commonService = inject(CommonService);
  private homeService = inject(HomeService);

  readonly InputType = InputType;

  public shortsSubjectOptions: string[] = [
    '全部'
    // '烹飪料理',
    // '理財投資',
    // '藝術創作',
    // '手作工藝'
  ];
  public selectedSubjectOption: string | null = null;
  tags$ = new ReplaySubject<TagsResponseModelDataInner[]>();
  transitionEnabled: any;

  public cityOptions: OptionType[] = [];

  public videoDataSource: VideoCardData[] = [];
  public courseDataSource: CardData[] = [];
  public reviewDataSource: ReviewData[] = [];

  public howToUseStepImages: string[] = [
    './../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg'
  ];

  public currentWindowSize: string = '';

  control = new FormControl('', [Validators.required]);

  items = [
    { label: '依關鍵字', value: SearchTypeEnum.KEYWORD },
    { label: '依類別', value: SearchTypeEnum.CATEGORY }
  ];

  @ViewChild('swiperElement')
  swiperElement!: ElementRef;

  @ViewChild('swiperElementCourse')
  swiperElementCourse!: ElementRef;

  swiperConfig: SwiperOptions = {
    // init: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          enabled: false
        }
      },
      600: {
        //當螢幕寬度大於等於320
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          enabled: false
        }
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
          enabled: true
        }
      },
      1080: {
        //當螢幕寬度大於等於768
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          enabled: true
        }
      },
      1460: {
        //當螢幕寬度大於等於1460
        slidesPerView: 4,
        spaceBetween: 10,
        navigation: {
          enabled: true
        }
      }
    },
    injectStyles: [
      `:host .swiper { overflow: visible !important; }
      :host .swiper-button-disabled {
        opacity: 1;
        background-color: #9F9F9F !important;
      }
      :host .swiper-button-prev {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-prev svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      :host .swiper-button-next {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-next svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      `
    ]
  };

  courseSwiperConfig: SwiperOptions = {
    // init: true,
    breakpoints: {
      0: {
        //當螢幕寬度大於等於0
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          enabled: false
        }
      },
      1080: {
        //當螢幕寬度大於等於768
        slidesPerView: 3,
        spaceBetween: 10
      },
      1460: {
        //當螢幕寬度大於等於1460
        slidesPerView: 4,
        spaceBetween: 10
      }
    },
    injectStyles: [
      `:host .swiper { overflow: visible !important; }
      :host .swiper-button-disabled {
        opacity: 1;
        background-color: #9F9F9F !important;
      }
      :host .swiper-button-prev {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-prev svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      :host .swiper-button-next {
        width: 56px;
        height: 56px;
        border-radius: 15%;
        background-color: #F36923;
      }
      :host .swiper-button-next svg {
        width: 16px;
        height: 12px;
        color: #fff;
      }
      `
    ]
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    protected readonly router: Router
  ) {}

  public ngOnInit() {
    this.selectSubjectOption('全部');
    this.selectCourseCity('all');
    this.reviewDataSource = FakeReviewData;

    this.getTags();
    this.getCityOptions();

    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((result) => {
        const initialBreakpoints = {
          [Breakpoints.Handset]: window.matchMedia(Breakpoints.Handset).matches,
          [Breakpoints.Tablet]: window.matchMedia(Breakpoints.Tablet).matches,
          [Breakpoints.Web]: window.matchMedia(Breakpoints.Web).matches
        };
        this.updateValueBasedOnBreakpoints(initialBreakpoints);
      });
  }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  public updateValueBasedOnBreakpoints(breakpoints: { [x: string]: any }) {
    if (breakpoints[Breakpoints.Handset]) {
      // Do something for small screens
      this.currentWindowSize = 'Handset';
    } else if (breakpoints[Breakpoints.Tablet]) {
      // Do something for medium screens
      this.currentWindowSize = 'Tablet';
    } else if (breakpoints[Breakpoints.Web]) {
      // Do something for large screens
      this.currentWindowSize = 'Web';
    }
  }

  initSwiper() {
    try {
      Object.assign(this.swiperElement.nativeElement, this.swiperConfig);
      if (this.swiperElement.nativeElement.initialized) {
        this.swiperElement.nativeElement.swiper.destroy();
        this.swiperElement.nativeElement.initialized = false;
      }
      this.swiperElement.nativeElement.initialize();
      Object.assign(
        this.swiperElementCourse.nativeElement,
        this.courseSwiperConfig
      );
      if (this.swiperElementCourse.nativeElement.initialized) {
        this.swiperElementCourse.nativeElement.swiper.destroy();
        this.swiperElementCourse.nativeElement.initialized = false;
      }
      this.swiperElementCourse.nativeElement.initialize();
    } catch (error) {
      // console.error('Swiper initialization failed', error);
    }
  }

  getTags() {
    this.commonService
      .apiCommonTagGet()
      .pipe(tap((data) => this.tags$.next(data.data)))
      .subscribe((res) => {
        res.data.forEach((item) =>
          this.shortsSubjectOptions.push(item.main_category as string)
        );
      });
  }

  public selectSubjectOption(option: string): void {
    this.selectedSubjectOption = option;

    const params: ApiHomeCourseVideosAllGetRequestParams = {};

    if (option !== '全部') {
      params.mainCategory = option;
    }

    this.homeService.apiHomeCourseVideosAllGet(params).subscribe((res) => {
      this.videoDataSource = res.data;
      this.initSwiper();
    });
  }

  public getCityOptions() {
    this.commonService
      .apiCommonOptionsCityPost({
        cityRequestModel: {
          is_oversea: false
        }
      })
      .subscribe((res) => {
        this.cityOptions = [
          {
            label: '探索全部',
            value: 'all'
          },
          ...res.data
        ];
      });
  }

  public selectCourseCity(option: string) {
    const params: ApiHomeCoursesAllGetRequestParams = {};
    if (option !== 'all') {
      params.cityId = option;
    }
    this.homeService.apiHomeCoursesAllGet(params).subscribe((res) => {
      this.courseDataSource = res.data;
      this.initSwiper();
    });
  }

  search(event: SearchType) {
    const searchText = event.value.trim();
    if (event.type === SearchTypeEnum.CATEGORY) {
      // 類別搜尋
      this.tags$.subscribe((tag) => {
        const mainCategories = tag.map((item) => item.main_category);
        const subCategories: { main: string | undefined; sub: string }[] = [];
        tag.forEach((item) => {
          if (item.sub_category) {
            item.sub_category.forEach((sub_category) => {
              subCategories.push({
                main: item.main_category,
                sub: sub_category
              });
            });
          }
        });

        if (mainCategories.find((mc) => mc === searchText)) {
          this.router.navigateByUrl(`/result-tag?mainCategory=${searchText}`);
          return;
        }

        const f = subCategories.find((sc) => sc.sub === searchText);
        if (f) {
          const mainCategory = this.router.navigateByUrl(
            `/result-tag?mainCategory=${f.main}&subCategory=${f.sub}`
          );
          return;
        }

        // 關鍵字搜尋
        if (searchText) {
          this.router.navigateByUrl(`/result-keyword?keyword=${searchText}`);
        } else {
          this.router.navigateByUrl(`/result-tag`);
        }
      });
    } else {
      // 關鍵字搜尋
      if (searchText) {
        this.router.navigateByUrl(`/result-keyword?keyword=${searchText}`);
      } else {
        this.router.navigateByUrl(`/result-tag`);
      }
    }
  }

  navigateToSignUp() {
    this.router.navigate(['sign-up']);
  }

  navigateToTeacherApply() {
    this.router.navigate(['teacher-apply']);
  }
}

export const FakeReviewData = [
  {
    nick_name: '安德森麗莎',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment: '從小就開始學習，老師的設置。',
    create_datetime: new Date('2024-05-27T08:22:50')
  },
  {
    nick_name: '卡拉加爾札',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.9,
    comment: '堅強的體魄是合作夥伴治療的理由。',
    create_datetime: new Date('2024-02-11T19:41:12')
  },
  {
    nick_name: '金伯利凱勒',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 5.0,
    comment: '婚姻是社會新家庭的一部分。',
    create_datetime: new Date('2024-02-21T01:07:07')
  },
  {
    nick_name: '斯坦利',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment: '我從來不建議在學院中這樣做。',
    create_datetime: new Date('2024-01-06T09:10:48')
  },
  {
    nick_name: '潔西卡加爾札',
    avator_image: 'https://dummyimage.com/21x441',
    rate: 5.0,
    comment: '創造並發現新機遇的過程中移動。',
    create_datetime: new Date('2024-05-27T18:11:08')
  },
  {
    nick_name: '加爾札',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.9,
    comment: '管理條件的談話中留下秩序。',
    create_datetime: new Date('2024-04-06T23:52:02')
  }
];
