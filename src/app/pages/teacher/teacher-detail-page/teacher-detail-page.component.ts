import { CommonModule, NgClass } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { WeeklyCalendarComponent } from '@tmf/libs-shared/components/weekly-calendar/weekly-calendar.component';
import { CourseData, FakeVideos } from '../../course-detail-page/mock-data';

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
export default class TeacherDetailPageComponent {
  activeSection: WritableSignal<string> = signal('sectionA');

  videoData: VideoCardData[] = FakeVideos;
  courseData = CourseData;
}
