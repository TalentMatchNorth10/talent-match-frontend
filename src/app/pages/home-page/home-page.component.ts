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
  SelectComponent
} from 'libs/shared/src';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
// import { ReviewData } from '@tmf/libs-shared/components/review-card/review.interface';
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
import { ReviewData } from '@tmf/libs-shared/components/review-card/review.interface';
import { UserInfoService } from 'src/app/shared/services/userInfo.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  private userInfoService = inject(UserInfoService);
  private dialogService = inject(DialogService);

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

  searchControl = new FormControl('', [Validators.required]);
  recommendControl = new FormControl('', [Validators.required]);

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
      this.videoDataSource = res.data as VideoCardData[];
      setTimeout(() => {
        this.initSwiper();
      }, 1);
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
      this.courseDataSource = res.data as CardData[];
      setTimeout(() => {
        this.initSwiper();
      }, 1);
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
    const userInfo = this.userInfoService.getCurrentUserInfo();
    if (userInfo?.is_teacher) {
      this.dialogService.openAlertDialog({
        title: '無法申請',
        content: '您已是老師，無需再次申請。'
      });
      return;
    }
    this.router.navigate(['apply-teacher']);
  }
}

export const FakeReviewData: ReviewData[] = [
  {
    nick_name: '安德森麗莎',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment:
      '很棒的課程，學到很多實用的知識。老師總是耐心回答大家的問題，感覺學到了很多。',
    create_datetime: new Date('2024-05-27T08:22:50')
  },
  {
    nick_name: 'garzakara',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.9,
    comment:
      '這門課幫我解答了好多疑問，非常推薦。老師的講解方式很適合初學者，真的很有幫助。',
    create_datetime: new Date('2024-02-11T19:41:12')
  },
  {
    nick_name: 'kellerkimberly',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 5.0,
    comment:
      '課程內容實用，老師教學效果很好。學到的知識可以直接應用到工作中，真的很實用。',
    create_datetime: new Date('2024-02-21T01:07:07')
  },
  {
    nick_name: 'zstanley',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment:
      '老師講解得很詳細，真的學到了很多！每個步驟都講得很清楚，讓我可以一步一步跟著學習，真的很棒。',
    create_datetime: new Date('2024-01-06T09:10:48')
  },
  {
    nick_name: 'garzajessica',
    avator_image: 'https://dummyimage.com/21x441',
    rate: 5.0,
    comment:
      '老師很用心，課程內容也很豐富。每個單元都有很多實例，讓人學得很扎實。',
    create_datetime: new Date('2024-05-27T18:11:08')
  },
  {
    nick_name: 'jgarza',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.9,
    comment:
      '老師很有親和力，課堂氣氛很好。大家都很活躍，學習氛圍非常棒，讓人感覺很放鬆。',
    create_datetime: new Date('2024-04-06T23:52:02')
  }
];
