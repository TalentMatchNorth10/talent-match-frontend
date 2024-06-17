import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import {
  CardData,
  HoverButtonClickEvent
} from '@tmf/libs-shared/components/card/card.interface';
import { FavoritesService } from 'libs/openapi/src';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-student-favorites-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './student-favorites-page.component.html',
  styleUrl: './student-favorites-page.component.scss'
})
export default class StudentFavoritesPageComponent implements OnInit {
  private FavoritesService = inject(FavoritesService);
  private router = inject(Router);
  private dialogService = inject(DialogService);

  favoriteList: CardData[] = [
    {
      course_id: '1',
      mainImg: 'https://fakeimg.pl/300/',
      title: '課程名稱1',
      content: '課程內容1',
      avatar: 'https://fakeimg.pl/300/',
      name: '老師名稱1',
      price: 1000,
      quantity: 1,
      main_category: '主分類1',
      sub_category: '次分類1',
      rating: 4.5,
      ratingCount: 100
    },
    {
      course_id: '2',
      mainImg: 'https://fakeimg.pl/300/',
      title: '課程名稱2',
      content: '課程內容2',
      avatar: 'https://fakeimg.pl/300/',
      name: '老師名稱2',
      price: 2000,
      quantity: 2,
      main_category: '主分類2',
      sub_category: '次分類2',
      rating: 4.5,
      ratingCount: 100
    },
    {
      course_id: '3',
      mainImg: 'https://fakeimg.pl/300/',
      title: '課程名稱2',
      content:
        '課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2課程內容2',
      avatar: 'https://fakeimg.pl/300/',
      name: '老師名稱2',
      price: 2000,
      quantity: 2,
      main_category: '主分類2',
      sub_category: '次分類2',
      rating: 4.5,
      ratingCount: 100
    }
  ];

  ngOnInit(): void {
    // this.getFavoriteList();
  }

  getFavoriteList() {
    this.FavoritesService.apiFavoritesGet().subscribe((res) => {
      this.favoriteList =
        res.data?.favorites?.map((favorite) => ({
          course_id: favorite.course_id || '',
          mainImg: favorite.main_image || '',
          title: favorite.name || '',
          content: favorite.content || '',
          avatar: favorite.teacher_avator || '',
          name: favorite.teacher_name || '',
          price: favorite.price_quantity![0].price || 0,
          quantity: favorite.price_quantity![0].quantity || 0,
          main_category: favorite.main_category || '',
          sub_category: favorite.sub_category || '',
          rating: favorite.rate || 0,
          ratingCount: 0
        })) || [];
    });
  }

  handleHoverButtonClicked(event: HoverButtonClickEvent) {
    switch (event.eventType) {
      case 'view':
        this.router.navigate(['/course', event.data.course_id]);
        break;
      case 'remove':
        this.dialogService
          .openConfirmDialog({
            title: '刪除課程',
            content: '是否確定要刪除此課程？',
            confirmBtnText: '確定',
            btnType: 'danger'
          })
          .subscribe((result) => {
            if (result) {
              this.FavoritesService.apiFavoritesDelete({
                favoriteRequestModel: {
                  course_id: event.data.course_id
                }
              }).subscribe(() => {
                this.getFavoriteList();
              });
            }
          });
        break;
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
