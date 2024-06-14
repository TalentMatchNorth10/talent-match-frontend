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
    NgClass
  ],
  templateUrl: './course-detail-page.component.html',
  styleUrl: './course-detail-page.component.scss'
})
export default class CourseDetailPageComponent {
  @ViewChildren('section') sections!: QueryList<ElementRef>;
  activeSection: WritableSignal<string> = signal('sectionA');
  cardData = CourseData;
  videoData: VideoCardData[] = FakeVideos;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          this.scrollToFragment(fragment);
        }
      }
    });
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
