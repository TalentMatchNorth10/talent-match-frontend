import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import {
  InputComponent,
  InputType,
  OptionComponent,
  ReviewCardComponent,
  SearchType,
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
  readonly InputType = InputType;

  public shortsSubjectOptions: string[] = [
    '全部',
    '烹飪料理',
    '理財投資',
    '藝術創作',
    '手作工藝'
  ];
  public selectedSubjectOption: string | null = null;
  transitionEnabled: any;

  public selectSubjectOption(option: string): void {
    this.selectedSubjectOption = option;
  }

  public videoDataSource: VideoCardData[] = [];
  public courseDataSource: CardData[] = [];
  public reviewDataSource: ReviewData[] = [];

  public howToUseStepImages: string[] = [
    './../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg'
  ];

  public currentWindowSize: string = '';

  control = new FormControl('準備好啟程了嗎？', [Validators.required]);

  items = [
    { label: '依關鍵字', value: 1 },
    { label: '依類別', value: 2 }
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
    this.videoDataSource = FakeVideos;
    this.courseDataSource = FakeCardData;
    this.reviewDataSource = FakeReviewData;

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

  initSwiper() {
    try {
      Object.assign(this.swiperElement.nativeElement, this.swiperConfig);
      this.swiperElement.nativeElement.initialize();
      Object.assign(
        this.swiperElementCourse.nativeElement,
        this.courseSwiperConfig
      );
      this.swiperElementCourse.nativeElement.initialize();
    } catch (error) {
      console.error('Swiper initialization failed', error);
    }
  }

  public updateValueBasedOnBreakpoints(breakpoints: {
    [key: string]: boolean;
  }) {
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
  }

  search(event: SearchType) {
    this.router.navigateByUrl(`/result-keyword?keyword=${event.value}`);
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

const FakeCardData: CardData[] = [
  {
    course_id: '1',
    mainImg: 'https://fakeimg.pl/300/',
    title: '課程名稱1',
    content: '課程內容1',
    avatar: 'https://fakeimg.pl/300/',
    name: '老師名稱1',
    price: 1000,
    quantity: 1,
    main_category: '主分類1',
    sub_category: '次分類1',
    rating: 4.5,
    ratingCount: 100
  },
  {
    course_id: '2',
    mainImg: 'https://fakeimg.pl/300/',
    title: '課程名稱2',
    content: '課程內容2',
    avatar: 'https://fakeimg.pl/300/',
    name: '老師名稱2',
    price: 2000,
    quantity: 2,
    main_category: '主分類2',
    sub_category: '次分類2',
    rating: 4.5,
    ratingCount: 100
  },
  {
    course_id: '3',
    mainImg: 'https://fakeimg.pl/300/',
    title: '課程名稱2',
    content:
      '課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2',
    avatar: 'https://fakeimg.pl/300/',
    name: '老師名稱2',
    price: 2000,
    quantity: 2,
    main_category: '主分類2',
    sub_category: '次分類2',
    rating: 4.5,
    ratingCount: 100
  },
  {
    course_id: '4',
    mainImg: 'https://fakeimg.pl/300/',
    title: '課程名稱2',
    content: '課程內容2',
    avatar: 'https://fakeimg.pl/300/',
    name: '老師名稱2',
    price: 2000,
    quantity: 2,
    main_category: '主分類2',
    sub_category: '次分類2',
    rating: 4.5,
    ratingCount: 100
  },
  {
    course_id: '5',
    mainImg: 'https://fakeimg.pl/300/',
    title: '課程名稱2',
    content: '課程內容2',
    avatar: 'https://fakeimg.pl/300/',
    name: '老師名稱2',
    price: 2000,
    quantity: 2,
    main_category: '主分類2',
    sub_category: '次分類2',
    rating: 4.5,
    ratingCount: 100
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
