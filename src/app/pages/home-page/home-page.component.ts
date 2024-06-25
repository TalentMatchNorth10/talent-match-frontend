import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewChecked,
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
export default class HomePageComponent
  implements OnInit, AfterViewInit, AfterViewChecked
{
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
        //当屏幕宽度大于等于320
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
        //当屏幕宽度大于等于768
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          enabled: true
        }
      },
      1460: {
        //当屏幕宽度大于等于1460
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
        //当屏幕宽度大于等于0
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          enabled: false
        }
      },
      1080: {
        //当屏幕宽度大于等于768
        slidesPerView: 3,
        spaceBetween: 10
      },
      1460: {
        //当屏幕宽度大于等于1460
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
    // this.courseDataSource = FakeCardData;
    this.reviewDataSource = FakeReviewData;

    this.getTags();
    this.getCityOptions();

    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((result) => {
        // this.updateValueBasedOnBreakpoints(result.breakpoints);
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

  ngAfterViewChecked(): void {
    // this.initSwiper();
  }

  public updateValueBasedOnBreakpoints(breakpoints: { [x: string]: any }) {
    if (breakpoints[Breakpoints.Handset]) {
      // Do something for small screens
      this.currentWindowSize = 'Handset';

      // console.log('Handset');
    } else if (breakpoints[Breakpoints.Tablet]) {
      // Do something for medium screens
      this.currentWindowSize = 'Tablet';

      // console.log('Tablet');
    } else if (breakpoints[Breakpoints.Web]) {
      // Do something for large screens
      this.currentWindowSize = 'Web';
      // console.log('Web');
    }

    // console.log(this.currentWindowSize);
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
      console.error('Swiper initialization failed', error);
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
        // this.toggleSelectCity(this.cityOptions[0]);
      });
  }

  public selectCourseCity(option: string) {
    // console.log(option);
    const params: ApiHomeCoursesAllGetRequestParams = {};
    if (option !== 'all') {
      params.cityId = option;
    }
    this.homeService.apiHomeCoursesAllGet(params).subscribe((res) => {
      // console.log(params, res);
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

const FakeVideos: VideoCardData[] = [
  // {
  //   video_id: '1',
  //   name: 'Introduction to JavaScript',
  //   category: 'Programming',
  //   intro: 'Learn the basics of JavaScript programming language.',
  //   video_type: 'youtube',
  //   url: 'https://youtu.be/bjCjJW_aAUk?si=zO58J-33XKrAGHjR',
  //   teacher_id: 't-1',
  //   course_id: 'c-1'
  // },

  {
    video_id: '2',
    name: 'Cooking Italian Pasta',
    category: 'Cooking',
    intro: 'Master the art of making authentic Italian pasta dishes.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    teacher_id: 't-2',
    course_id: 'c-2'
  },
  {
    video_id: '3',
    name: 'Yoga for Beginners',
    category: 'Fitness',
    intro: 'Start your yoga journey with these beginner-friendly poses.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    teacher_id: 't-3',
    course_id: 'c-3'
  },
  {
    video_id: '4',
    name: 'Introduction to Astrophysics',
    category: 'Science',
    intro:
      'Explore the wonders of the universe with basic astrophysics concepts.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    teacher_id: 't-4',
    course_id: 'c-4'
  },
  {
    video_id: '5',
    name: 'Abstract Oil Painting Techniques',
    category: 'Art',
    intro: 'Discover unique techniques for creating abstract oil paintings.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    teacher_id: 't-5',
    course_id: 'c-5'
  },
  {
    video_id: '6',
    name: 'Healthy Smoothie Recipes',
    category: 'Cooking',
    intro: 'Learn how to make delicious and nutritious smoothies at home.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    teacher_id: 't-6',
    course_id: 'c-6'
  },
  {
    video_id: '7',
    name: 'Introduction to Machine Learning',
    category: 'Technology',
    intro: 'Get started with machine learning algorithms and applications.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    teacher_id: 't-7',
    course_id: 'c-7'
  },
  {
    video_id: '8',
    name: "Beginner's Guide to Meditation",
    category: 'Wellness',
    intro: 'Start your meditation practice with these simple techniques.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    teacher_id: 't-8',
    course_id: 'c-8'
  }
];

export const FakeReviewData = [
  {
    nick_name: 'andersonlisa',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment: 'Start small myself teacher set.',
    create_datetime: new Date('2024-05-27T08:22:50')
  },
  {
    nick_name: 'garzakara',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.9,
    comment: 'Hard body reason partner treatment.',
    create_datetime: new Date('2024-02-11T19:41:12')
  },
  {
    nick_name: 'kellerkimberly',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 5.0,
    comment: 'Marriage someone society how new family individual.',
    create_datetime: new Date('2024-02-21T01:07:07')
  },
  {
    nick_name: 'zstanley',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment: 'Upon never suggest institution I professor wish.',
    create_datetime: new Date('2024-01-06T09:10:48')
  },
  {
    nick_name: 'garzajessica',
    avator_image: 'https://dummyimage.com/21x441',
    rate: 5.0,
    comment: 'Move drop create discover seat become.',
    create_datetime: new Date('2024-05-27T18:11:08')
  },
  {
    nick_name: 'jgarza',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.9,
    comment: 'Left order talk management condition receive.',
    create_datetime: new Date('2024-04-06T23:52:02')
  }
  // {
  //   nick_name: 'scott59',
  //   avator_image: 'https://dummyimage.com/636x651',
  //   rate: 4.7,
  //   comment: 'Hundred want room begin box raise.',
  //   create_datetime: new Date('2024-04-16T23:52:28')
  // },
  // {
  //   nick_name: 'martinezlaura',
  //   avator_image: 'https://dummyimage.com/636x651',
  //   rate: 4.8,
  //   comment: 'Option price suddenly.',
  //   create_datetime: new Date('2024-01-15T20:49:07')
  // }
];
