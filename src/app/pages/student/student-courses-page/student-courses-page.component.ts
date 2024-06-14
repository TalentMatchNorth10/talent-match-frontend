import { StudetnCourseService } from './studetn-course.service';
import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { StarRatingComponent } from '@tmf/libs-shared/components/star-rating/star-rating.component';
import { StudentService } from 'libs/openapi/src';
import { PurchasedCoursesResponseModelDataPurchasedCoursesInner } from 'libs/openapi/src/model/purchased-courses-response-model-data-purchased-courses-inner';
import { TmfDateTimePipe } from 'src/app/shared/pipes/tmf-date.pipe';
import { DialogService } from 'src/app/shared/services/dialog.service';

export interface PurchasedCourses
  extends PurchasedCoursesResponseModelDataPurchasedCoursesInner {
  isExpanded: boolean;
}

@Component({
  selector: 'app-student-courses-page',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, TmfDateTimePipe],
  templateUrl: './student-courses-page.component.html',
  styleUrl: './student-courses-page.component.scss'
})
export default class StudentCoursesPageComponent {
  private studentService = inject(StudentService);
  private dialogService = inject(DialogService);
  private studetnCourseService = inject(StudetnCourseService);

  purchasedCourses: Signal<PurchasedCourses[]> =
    this.studetnCourseService.purchasedCoursesSig;
  isExpanded = false;

  ngOnInit(): void {
    this.studentService.apiStudentPurchasedCoursesGet().subscribe((data) => {
      if (data.data?.purchased_courses) {
        this.studetnCourseService.updatePurchasedCourses(
          data.data?.purchased_courses.map((course) => ({
            ...course,
            isExpanded: false
          }))
        );
      }
    });
  }

  openReserrveDialog(
    purchasedCourse: PurchasedCoursesResponseModelDataPurchasedCoursesInner
  ) {
    const { course_id, teacher_id, course_name } = purchasedCourse;
    const { id: student_id } = this.decodeJWT(
      localStorage.getItem('access_token') ||
        sessionStorage.getItem('access_token') ||
        ''
    );
    this.dialogService
      .openReserveDialog({
        student_id,
        course_id,
        teacher_id,
        course_name
      })
      .closed.subscribe(() => {
        this.studentService
          .apiStudentPurchasedCoursesGet()
          .subscribe((data) => {
            if (data.data?.purchased_courses) {
              this.studetnCourseService.updatePurchasedCourses(
                data.data?.purchased_courses.map((course) => ({
                  ...course,
                  isExpanded: false
                }))
              );
            }
          });
      });
  }

  decodeJWT(token: string) {
    const base64Url = token.split('.')[1]; // 取得 payload 部分
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
}
