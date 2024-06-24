import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { GetCourseDetailResponseModelDataReviewsInner } from 'libs/openapi/src';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'tmf-comment',
  standalone: true,
  imports: [StarRatingComponent, DatePipe],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  constructor(
    public dialogRef: DialogRef<CommentComponent>,
    @Inject(DIALOG_DATA)
    public data: any
  ) {}
}
