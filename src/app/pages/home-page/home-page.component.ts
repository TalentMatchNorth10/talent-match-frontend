import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import { ShortVideoCardComponent } from 'libs/shared/src';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ShortVideoCardComponent, CardComponent],
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

  public visibleCards: number = 4;
  public cardWidthPercentage: number = 25;

  public shortsCurrentIndex = 0;
  public coursesCurrentIndex = 0;

  public get shortsTransformStyle() {
    return `translateX(-${this.shortsCurrentIndex * this.cardWidthPercentage}%)`;
  }

  public get coursesTransformStyle() {
    return `translateX(-${this.coursesCurrentIndex * this.cardWidthPercentage}%)`;
  }

  public howToUseStepImages: string[] = [
    './../../../assets/images/home-page/how-to-use/how-to-use-step-1.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-2.svg',
    './../../../assets/images/home-page/how-to-use/how-to-use-step-3.svg'
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  public ngOnInit() {
    this.videoDataSource = FakeVideos;
    this.courseDataSource = FakeCardData;

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
  }

  public updateValueBasedOnBreakpoints(breakpoints: {
    [key: string]: boolean;
  }) {
    if (breakpoints[Breakpoints.Handset]) {
      // Do something for small screens
      this.visibleCards = 1;
      this.cardWidthPercentage = 100;
      // console.log('Handset');
    } else if (breakpoints[Breakpoints.Tablet]) {
      // Do something for medium screens
      this.visibleCards = 2;
      this.cardWidthPercentage = 35;
      // console.log('Tablet');
    } else if (breakpoints[Breakpoints.Web]) {
      // Do something for large screens
      this.visibleCards = 4;
      this.cardWidthPercentage = 25;
      // console.log('Web');
    }
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

const FakeVideos: VideoCardData[] = [
  {
    video_id: '1',
    name: 'Introduction to JavaScript',
    category: 'Programming',
    intro: 'Learn the basics of JavaScript programming language.',
    video_type: 'youtube',
    url: 'https://youtu.be/bjCjJW_aAUk?si=zO58J-33XKrAGHjR'
  },
  {
    video_id: '2',
    name: 'Cooking Italian Pasta',
    category: 'Cooking',
    intro: 'Master the art of making authentic Italian pasta dishes.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  },
  {
    video_id: '3',
    name: 'Yoga for Beginners',
    category: 'Fitness',
    intro: 'Start your yoga journey with these beginner-friendly poses.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  },
  {
    video_id: '4',
    name: 'Introduction to Astrophysics',
    category: 'Science',
    intro:
      'Explore the wonders of the universe with basic astrophysics concepts.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  },
  {
    video_id: '5',
    name: 'Abstract Oil Painting Techniques',
    category: 'Art',
    intro: 'Discover unique techniques for creating abstract oil paintings.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
  },
  {
    video_id: '6',
    name: 'Healthy Smoothie Recipes',
    category: 'Cooking',
    intro: 'Learn how to make delicious and nutritious smoothies at home.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
  },
  {
    video_id: '7',
    name: 'Introduction to Machine Learning',
    category: 'Technology',
    intro: 'Get started with machine learning algorithms and applications.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
  },
  {
    video_id: '8',
    name: "Beginner's Guide to Meditation",
    category: 'Wellness',
    intro: 'Start your meditation practice with these simple techniques.',
    video_type: 'storage',
    url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
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
