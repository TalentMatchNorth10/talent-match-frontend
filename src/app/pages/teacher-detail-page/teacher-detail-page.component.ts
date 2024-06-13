import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { WeeklyCalendarComponent } from '@tmf/libs-shared/components/weekly-calendar/weekly-calendar.component';
import { CourseData, FakeVideos } from '../course-detail-page/mock-data';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';

@Component({
  selector: 'app-teacher-detail-page',
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
  templateUrl: './teacher-detail-page.component.html',
  styleUrl: './teacher-detail-page.component.scss'
})
export default class TeacherDetailPageComponent implements OnInit {
  // activeSection: WritableSignal<string> = signal('sectionA');

  introductionData!: VideoCardData;
  advantagesData!: VideoCardData;

  recommendedCourseData!: CardData[];

  ngOnInit(): void {
    this.introductionData = FakeVideos[0];
    this.advantagesData = FakeVideos[1];

    this.recommendedCourseData = CourseData;
  }
}
