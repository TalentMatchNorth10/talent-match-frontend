import { CourseDetailService } from './../../../../libs/openapi/src/api/course-detail.service';
import { CourseData, FakeVideos } from './mock-data';
import { CommonModule, NgClass } from '@angular/common';
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
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { WeeklyCalendarComponent } from '@tmf/libs-shared/components/weekly-calendar/weekly-calendar.component';
import {
  FavoritesService,
  GetCourseDetailResponseModel,
  GetCourseDetailResponseModelData,
  GetCourseDetailResponseModelDataReviewsInner,
  GetWeeklyCanlendarResponseModelDataInner,
  ShopService
} from 'libs/openapi/src';
import { Observable, map, shareReplay, switchMap, tap } from 'rxjs';
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
      tap((data) => console.log('weekly_calendar', data)),
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
      console.log('course_id', this.course_id);
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
      .subscribe({
        next: (response) => {
          if (toCart) {
            this.router.navigate(['/cart']);
          }
        },
        error: (error) => {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
          console.error('error', error);
        }
      });
  }

  openSurvey(url: string): void {
    window.open(url, '_blank');
  }
  addFavorite(): void {
    console.log('test');
    this.favoritesService
      .apiFavoritesPost({
        favoriteRequestModel: {
          course_id: this.course_id
        }
      })
      .subscribe({
        next: (response) => {
          console.log('response', response);
        },
        error: (error) => {
          console.error('error', error);
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      });
  }

  openAllReviews(
    reviews: GetCourseDetailResponseModelDataReviewsInner[]
  ): void {
    this.dialogService.openCommentDialog({
      reviews
    });
  }

  openTeacherDetailPage(teacher_id: string): void {
    this.router.navigate([`teacher-detail/${teacher_id}`]);
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
    this.router.navigate([`teacher-detail/${id}`]);
  }
}
