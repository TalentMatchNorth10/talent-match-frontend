import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { VideoCardData } from '@tmf/libs-shared/components/short-video-card/video-card.interface';
import { VideoCardComponent } from '@tmf/libs-shared/components/video-card/video-card.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import {
  GetTeacherDetailResponseModelData,
  GetTeacherDetailResponseModelDataCoursesInner,
  GetTeacherDetailResponseModelDataIntroVideoInnerVideoId,
  TeacherDetailService
} from 'libs/openapi/src';

@Component({
  selector: 'app-teacher-detail-page',
  standalone: true,
  imports: [CommonModule, VideoCardComponent, CardComponent],
  templateUrl: './teacher-detail-page.component.html',
  styleUrl: './teacher-detail-page.component.scss'
})
export default class TeacherDetailPageComponent implements OnInit {
  protected teacherDetailService = inject(TeacherDetailService);
  protected route = inject(ActivatedRoute);
  protected router = inject(Router);
  data?: GetTeacherDetailResponseModelData;

  teacherVideosData: TeacherIntroVideo[] = [];

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

        this.data.intro_video.map((video) => {
          const introVideo: TeacherIntroVideo = {
            title: video.title,
            video: this.transformToVideoCardData(data.data, video.video_id)
          };
          this.teacherVideosData.push(introVideo);
        });
      });
  }
  transformToCardData(
    data: GetTeacherDetailResponseModelData,
    course: GetTeacherDetailResponseModelDataCoursesInner
  ): CardData {
    return {
      ...course,
      course_id: course._id,
      main_image: course.main_image,
      title: course.name,
      name: data.name,
      avatar: this.data?.avator_image || '',
      price: course.price_quantity[0].price,
      quantity: course.price_quantity[0].quantity,
      rate: 0,
      ratingCount: 0
    };
  }

  transformToVideoCardData(
    data: GetTeacherDetailResponseModelData,
    video: GetTeacherDetailResponseModelDataIntroVideoInnerVideoId
  ): VideoCardData {
    const videoCard: VideoCardData = {
      video_id: video._id,
      name: video.name,
      category: video.category,
      intro: video.intro,
      video_type: video.video_type,
      url: video.url,
      teacher_id: video.teacher_id,
      teacher_name: data.name,
      teacher_avatar_url: data.avator_image
    };
    return videoCard;
  }
}

interface TeacherIntroVideo {
  title: string;
  video: VideoCardData;
}
