import { CourseDetailService } from './../../../../libs/openapi/src/api/course-detail.service';
import { CourseData, FakeVideos } from './mock-data';
import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  ViewChildren,
  WritableSignal,
  inject,
  signal
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink
} from '@angular/router';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { WeeklyCalendarComponent } from '@tmf/libs-shared/components/weekly-calendar/weekly-calendar.component';
import {
  FavoritesService,
  GetCourseDetailResponseModelData,
  GetCourseDetailResponseModelDataReviewsInner,
  GetWeeklyCanlendarResponseModelDataInner,
  ShopService
} from 'libs/openapi/src';
import { Observable, map, shareReplay, switchMap, tap } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-course-detail-page',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingComponent,
    VideoCardComponent,
    WeeklyCalendarComponent,
    CardComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.scss'
})
export default class CourseDetailPageComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef>;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private courseDetailService = inject(CourseDetailService);
  private shop = inject(ShopService);
  private favoritesService = inject(FavoritesService);
  private fb = inject(FormBuilder);
  private dialogService = inject(DialogService);
  private cartService = inject(CartService);

  activeSection: WritableSignal<string> = signal('sectionA');
  cardData = CourseData;
  videoData: VideoCardData[] = FakeVideos;
  course_id = '';

  formGroup = this.fb.group({
    purchase_item_id: this.fb.control('')
  });

  course$: Observable<GetCourseDetailResponseModelData> =
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((id) =>
        this.courseDetailService.apiCourseDetailCourseIdGet({
          courseId: id || ''
        })
      ),
      map((response) => response.data),
      tap(() => window.scrollTo(0, 0)),
      shareReplay(1)
    );

  weekly_calendar$: Observable<GetWeeklyCanlendarResponseModelDataInner[]> =
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      switchMap((id) =>
        this.courseDetailService.apiCourseDetailWeeklyCanlendarCourseIdGet({
          courseId: id || ''
        })
      ),
      map((response) => response.data),
      shareReplay(1)
    );

  recommendCourse$: Observable<CardData[]> = this.route.paramMap.pipe(
    map((params) => params.get('id')),
    switchMap((id) =>
      this.courseDetailService.apiCourseDetailRecommendCoursesCourseIdGet({
        courseId: id || ''
      })
    ),
    map((response) => response.data),
    map((data) => {
      return data.recommendCourses.map((course) => {
        return {
          course_id: course.course_id,
          main_image: course.main_image,
          title: course.course_name,
          content: course.content || '',
          avatar: course.teacher_avatar,
          name: course.teacher_name,
          price: course.price_quantity.price,
          main_category: course.main_category,
          sub_category: course.sub_category,
          rate: course.rate,
          ratingCount: course.total_reviews_count,
          min_price: course.price_quantity
        };
      });
    }),
    shareReplay(1)
  );

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          this.scrollToFragment(fragment);
        }
      }
    });
    this.route.paramMap.subscribe((params) => {
      this.course_id = params.get('id') || '';
    });
  }

  addToCart(toCart: boolean = false): void {
    if (!this.formGroup.get('purchase_item_id')!.value) return;
    this.shop
      .apiShopCartPost({
        addCartItemRequestModel: {
          course_id: this.course_id,
          purchase_item_id: this.formGroup.get('purchase_item_id')!.value!
        }
      })
      .subscribe(() => {
        this.cartService.update();
        if (toCart) {
          this.router.navigate(['/cart']);
        }
      });
  }

  openSurvey(url: string): void {
    window.open(url, '_blank');
  }
  addFavorite(): void {
    this.favoritesService
      .apiFavoritesPost({
        favoriteRequestModel: {
          course_id: this.course_id
        }
      })
      .subscribe();
  }

  copyToClipboard() {
    if (navigator.clipboard) {
      const currentUrl = window.location.href; // 獲取當前頁面 URL
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          this.dialogService.openAlertDialog({
            title: '分享成功',
            content: '已將網址複製到剪貼簿，請分享給您的朋友！'
          });
        })
        .catch((err) => {
          this.dialogService.openAlertDialog({
            title: '分享失敗',
            content: '複製網址失敗，請手動複製網址！'
          });
        });
    }
  }

  openAllReviews(
    reviews: GetCourseDetailResponseModelDataReviewsInner[]
  ): void {
    this.dialogService.openCommentDialog({
      reviews
    });
  }

  openTeacherDetailPage(teacher_id: string): void {
    this.router.navigate([`detail-teacher/${teacher_id}`]);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.updateActiveSection();
  }

  private scrollToFragment(fragment: string) {
    const element = this.sections.find(
      (section) => section.nativeElement.id === fragment
    );
    if (element) {
      element.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  private updateActiveSection(): void {
    let currentSection = this.activeSection();

    this.sections.forEach((section) => {
      const sectionTop = section.nativeElement.getBoundingClientRect().top;
      const sectionBottom =
        section.nativeElement.getBoundingClientRect().bottom;

      if (
        sectionTop <= window.innerHeight / 4 &&
        sectionBottom > window.innerHeight / 4
      ) {
        currentSection = section.nativeElement.getAttribute('id') || '';
      }
    });

    this.activeSection.set(currentSection);
  }

  navigateToTeacherDetail(id: string): void {
    this.router.navigate([`detail-teacher/${id}`]);
  }
}
