import { StudentReservationService } from './../../../../../../openapi/src/api/student-reservation.service';
import { Component, Inject, computed, inject, signal } from '@angular/core';
import { QuillEditorComponent } from '../../form/quill-editor/quill-editor.component';
import { PurchasedCoursesResponseModelDataPurchasedCoursesInnerReservedCourseInner } from 'libs/openapi/src';
import { PurchasedCourses } from 'src/app/pages/student/student-courses-page/student-courses-page.component';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { TmfDateTimePipe } from 'src/app/shared/pipes/tmf-date.pipe';
import { CommonModule } from '@angular/common';

interface ReviewDialogData {
  purchasedCourse: PurchasedCourses;
  reserve: PurchasedCoursesResponseModelDataPurchasedCoursesInnerReservedCourseInner;
}

@Component({
  selector: 'tmf-review',
  standalone: true,
  imports: [QuillEditorComponent, TmfDateTimePipe, CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  private studentReservationService = inject(StudentReservationService);

  rating = signal(0);
  comment = signal('');

  btnDisabled = computed(() => {
    return this.rating() === 0 || this.comment() === '';
  });

  constructor(
    public dialogRef: DialogRef<boolean,ReviewComponent>,
    @Inject(DIALOG_DATA)
    public data: ReviewDialogData
  ) {}

  contentChange(content: string) {
    this.comment.set(content);
  }

  rate(star: number) {
    this.rating.set(star);
  }

  submitReview() {
    if (this.btnDisabled()) {
      return;
    }
    const { id: student_id } = this.decodeJWT(
      localStorage.getItem('access_token') ||
        sessionStorage.getItem('access_token') ||
        ''
    );

    this.studentReservationService
      .apiStudentReservationReviewCoursePost({
        reviewCourseRequestModel: {
          course_id: this.data.purchasedCourse.course_id!,
          user_id: student_id,
          reserve_id: this.data.reserve.reserve_id,
          rate: this.rating().toString(),
          comment: this.comment()
        }
      })
      .subscribe(() => {
        this.dialogRef.close(true);
      });

    // this.dialogRef.close({
    //   rating: this.rating(),
    //   content: this.content()
    // });
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
