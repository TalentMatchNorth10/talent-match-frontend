import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  imports: [CommonModule],
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss'],
  standalone: true
})
export class RatingStarComponent implements OnInit {
  @Input() rating: number = 0; // 默认评分为0
  stars: number[] = [1, 2, 3, 4, 5]; // 总共5颗星星
  fullStars: number = 0; // 实心星星数量
  hasHalfStar: boolean = false; // 是否有半星星

  constructor() {}

  ngOnInit(): void {
    this.fullStars = Math.floor(this.rating);
    this.hasHalfStar = this.rating % 1 >= 0.5;
  }
}
