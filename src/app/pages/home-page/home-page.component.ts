import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShortVideoCardComponent } from '@tmf/shared';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ShortVideoCardComponent],
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

  cards = [
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
  currentIndex = 0;
  visibleCards = 4;
  cardWidthPercentage = 25; // Each card takes 25% of the container's width

  get transformStyle() {
    return `translateX(-${this.currentIndex * this.cardWidthPercentage}%)`;
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.cards.length - this.visibleCards) {
      this.currentIndex++;
    }
  }

  ngOnInit() {}
}
