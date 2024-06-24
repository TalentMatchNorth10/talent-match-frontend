import { CommonModule, NgClass } from '@angular/common';
import {
  Component,
  OnInit,
  WritableSignal,
  inject,
  signal
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { WeeklyCalendarComponent } from '@tmf/libs-shared/components/weekly-calendar/weekly-calendar.component';
import { CourseData, FakeVideos } from '../course-detail-page/mock-data';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import {
  CommonService,
  GetTeacherDetailResponseModelData,
  GetTeacherDetailResponseModelDataCoursesInner,
  TeacherDetailService
} from 'libs/openapi/src';

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
  protected teacherDetailService = inject(TeacherDetailService);
  protected route = inject(ActivatedRoute);
  protected router = inject(Router);
  data?: GetTeacherDetailResponseModelData;
  // activeSection: WritableSignal<string> = signal('sectionA');

  introductionData!: VideoCardData;
  advantagesData!: VideoCardData;

  recommendedCourseData!: CardData[];

  ngOnInit(): void {
    this.teacherDetailService
      .apiTeacherDetailTeacherIdGet({
        teacherId: this.route.snapshot.params['id']
      })
      .subscribe((data) => {
        this.data = data.data;
        this.recommendedCourseData = this.data.courses.map((course) =>
          this.transformToCardData(data.data, course)
        );
      });

    this.introductionData = FakeVideos[0];
    this.advantagesData = FakeVideos[1];
  }
  transformToCardData(
    data: GetTeacherDetailResponseModelData,
    course: GetTeacherDetailResponseModelDataCoursesInner
  ): CardData {
    return {
      ...course,
      course_id: course._id,
      mainImg: course.main_image,
      title: course.name,
      name: data.name,
      avatar: this.data?.avator_image || '',
      price: course.price_quantity[0].price,
      quantity: course.price_quantity[0].quantity,
      rate: 0,
      ratingCount: 0
    };
  }
}
