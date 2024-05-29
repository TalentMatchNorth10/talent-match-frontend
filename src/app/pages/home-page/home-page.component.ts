import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import { ReviewCardComponent, ShortVideoCardComponent } from 'libs/shared/src';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { ReviewData } from '@tmf/libs-shared/components/review-card/review.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ShortVideoCardComponent,
    CardComponent,
    StarRatingComponent,
    ReviewCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent implements OnInit {
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

  public visibleCards: number = 4;
  public cardWidthPercentage: number = 25;

  public shortsCurrentIndex = 0;
  public coursesCurrentIndex = 0;
  public reviewCurrentIndex = 0;

  public get shortsTransformStyle() {
    return `translateX(-${this.shortsCurrentIndex * this.cardWidthPercentage}%)`;
  }

  public get coursesTransformStyle() {
    return `translateX(-${this.coursesCurrentIndex * this.cardWidthPercentage}%)`;
  }

  public get reviewTransformStyle() {
    return `translateX(-${this.reviewCurrentIndex * 100}%)`;
  }

  public howToUseStepImages: string[] = [
    './../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg'
  ];

  public currentWindowSize: string = '';

  constructor(private breakpointObserver: BreakpointObserver) {}

  public ngOnInit() {
    this.videoDataSource = FakeVideos;
    this.courseDataSource = FakeCardData;
    this.reviewDataSource = FakeReviewData;

    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe((result) => {
        this.updateValueBasedOnBreakpoints(result.breakpoints);
      });

    const initialBreakpoints = {
      [Breakpoints.Handset]: window.matchMedia(Breakpoints.Handset).matches,
      [Breakpoints.Tablet]: window.matchMedia(Breakpoints.Tablet).matches,
      [Breakpoints.Web]: window.matchMedia(Breakpoints.Web).matches
    };
    this.updateValueBasedOnBreakpoints(initialBreakpoints);

    // if (this.currentWindowSize == 'Handset') {
    //   setInterval(() => {
    //     if (this.reviewCurrentIndex < this.reviewDataSource.length - 1) {
    //       this.reviewCurrentIndex++;
    //     } else {
    //       this.reviewCurrentIndex = 0;
    //     }
    //   }, 3000);
    // }
  }

  public updateValueBasedOnBreakpoints(breakpoints: {
    [key: string]: boolean;
  }) {
    if (breakpoints[Breakpoints.Handset]) {
      // Do something for small screens
      this.currentWindowSize = 'Handset';
      this.visibleCards = 1;
      this.cardWidthPercentage = 100;
      // console.log('Handset');
    } else if (breakpoints[Breakpoints.Tablet]) {
      // Do something for medium screens
      this.currentWindowSize = 'Tablet';
      this.visibleCards = 2;
      this.cardWidthPercentage = 35;
      // console.log('Tablet');
    } else if (breakpoints[Breakpoints.Web]) {
      // Do something for large screens
      this.currentWindowSize = 'Web';
      this.visibleCards = 4;
      this.cardWidthPercentage = 25;
      // console.log('Web');
    }

    console.log(this.currentWindowSize);
  }

  public shortsPrev() {
    if (this.shortsCurrentIndex > 0) {
      this.shortsCurrentIndex--;
    }
  }

  public shortsNext() {
    if (
      this.shortsCurrentIndex <
      this.videoDataSource.length - this.visibleCards
    ) {
      this.shortsCurrentIndex++;
    }
  }

  public coursesPrev() {
    if (this.coursesCurrentIndex > 0) {
      this.coursesCurrentIndex--;
    }
  }

  public coursesNext() {
    if (
      this.coursesCurrentIndex <
      this.courseDataSource.length - this.visibleCards
    ) {
      this.coursesCurrentIndex++;
    }
  }
}

const FakeCardData = [
  {
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
  },
  {
    nick_name: 'scott59',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.7,
    comment: 'Hundred want room begin box raise.',
    create_datetime: new Date('2024-04-16T23:52:28')
  },
  {
    nick_name: 'martinezlaura',
    avator_image: 'https://dummyimage.com/636x651',
    rate: 4.8,
    comment: 'Option price suddenly.',
    create_datetime: new Date('2024-01-15T20:49:07')
  }
];
