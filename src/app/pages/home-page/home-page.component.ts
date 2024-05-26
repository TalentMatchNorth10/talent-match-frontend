import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  CourseCardComponent,
  RatingStarComponent,
  ShortVideoCardComponent
} from '@tmf/shared';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ShortVideoCardComponent,
    CourseCardComponent,
    RatingStarComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent implements OnInit {
  public shortsSubjectOptions: string[] = [
    '全部',
    '烹飪料理',
    '理財投資',
    '藝術創作',
    '手作工藝'
  ];
  public selectedSubjectOption: string | null = null;
  transitionEnabled: any;

  public selectSubjectOption(option: string): void {
    this.selectedSubjectOption = option;
  }

  public cards = [
    { title: 'Card 1', content: 'Content of Card 1' },
    { title: 'Card 2', content: 'Content of Card 2' },
    { title: 'Card 3', content: 'Content of Card 3' },
    { title: 'Card 4', content: 'Content of Card 4' },
    { title: 'Card 5', content: 'Content of Card 5' },
    { title: 'Card 6', content: 'Content of Card 6' },
    { title: 'Card 7', content: 'Content of Card 7' },
    { title: 'Card 8', content: 'Content of Card 8' },
    { title: 'Card 9', content: 'Content of Card 9' },
    { title: 'Card 10', content: 'Content of Card 10' }
  ];

  public visibleCards = 4;
  public cardWidthPercentage = 25; // Each card takes 25% of the container's width

  public shortsCurrentIndex = 0;
  public coursesCurrentIndex = 0;

  public get shortsTransformStyle() {
    return `translateX(-${this.shortsCurrentIndex * this.cardWidthPercentage}%)`;
  }

  public shortsPrev() {
    if (this.shortsCurrentIndex > 0) {
      this.shortsCurrentIndex--;
    }
  }

  public shortsNext() {
    if (this.shortsCurrentIndex < this.cards.length - this.visibleCards) {
      this.shortsCurrentIndex++;
    }
  }

  public get coursesTransformStyle() {
    return `translateX(-${this.coursesCurrentIndex * this.cardWidthPercentage}%)`;
  }

  public coursesPrev() {
    if (this.coursesCurrentIndex > 0) {
      this.coursesCurrentIndex--;
    }
  }

  public coursesNext() {
    if (this.coursesCurrentIndex < this.cards.length - this.visibleCards) {
      this.coursesCurrentIndex++;
    }
  }

  public ngOnInit() {}
}
