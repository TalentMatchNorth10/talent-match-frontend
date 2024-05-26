import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RatingStarComponent } from '../rating-star/rating-star.component';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RatingStarComponent],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {
  @Input() public imgUrl: string = '';
  @Input() public teacherImgUrl: string = '';
  @Input() public tag: string = '';
  @Input() public description: string = '';

  constructor(private sanitizer: DomSanitizer) {}

  public get sanitizedImgUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.imgUrl);
  }

  ngOnInit(): void {}
}
