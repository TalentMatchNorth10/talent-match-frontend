import { CommonModule } from '@angular/common';
import { Component, Input, type OnInit } from '@angular/core';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ReviewData } from './review.interface';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.scss'
})
export class ReviewCardComponent implements OnInit {
  @Input() public data!: ReviewData;

  constructor() {}

  ngOnInit(): void {}
}
