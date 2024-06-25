import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CartTableComponent } from '../cart-table/cart-table.component';
import {
  CardData,
  HoverButtonClickEvent
} from '@tmf/libs-shared/components/card/card.interface';
import {
  FavoritesService,
  GetCartItemsResponseModelDataInner
} from 'libs/openapi/src';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, CartTableComponent, CardComponent],
  templateUrl: `./cart-list.component.html`,
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
  private router = inject(Router);
  private FavoritesService = inject(FavoritesService);
  private cartService = inject(CartService);

  @Input() cartDataSource: GetCartItemsResponseModelDataInner[] = [];
  @Input() courseDataSource: CardData[] = [];

  @Output() selectChange = new EventEmitter<
    GetCartItemsResponseModelDataInner[]
  >();
  selectedArr: GetCartItemsResponseModelDataInner[] | null = null;

  @Output() stepChange = new EventEmitter();
  @Output() removeItem = new EventEmitter<string>();

  get totalCount(): number {
    if (!this.cartDataSource || !this.cartDataSource.length) return 0;
    return this.cartDataSource.length;
  }

  get totalAmount(): string {
    if (!this.cartDataSource || !this.cartDataSource.length) return '0';
    return this.cartDataSource
      .reduce((acc, cur) => acc + cur.price, 0)
      .toLocaleString();
  }

  ngOnInit(): void {
    this.getFavoriteList();
  }

  handleItemClick(course_id: string) {
    this.router.navigate([`course-detail/${course_id}`]);
  }

  handleSelectedChange(selectedArr: GetCartItemsResponseModelDataInner[]) {
    this.selectedArr = selectedArr;
    this.selectChange.emit(selectedArr);
  }

  handleRemoveItem(purchase_item_id: string) {
    this.removeItem.emit(purchase_item_id);
    this.cartService.update();
  }

  handleAddFavorite(item: GetCartItemsResponseModelDataInner) {
    this.FavoritesService.apiFavoritesPost({
      favoriteRequestModel: { course_id: item.course_id }
    }).subscribe(() => {
      this.getFavoriteList();
    });
  }

  handleFavoriteClick(event: HoverButtonClickEvent) {
    switch (event.eventType) {
      case 'view':
        this.handleItemClick(event.data.course_id);
        break;
      case 'remove':
        this.removeFavorite(event.data.course_id);
        break;
    }
  }

  checkout() {
    if (!this.selectedArr || this.selectedArr?.length === 0) return;
    this.stepChange.emit();
  }

  continueShopping() {
    this.router.navigate(['/result-tag']);
  }

  getFavoriteList() {
    this.FavoritesService.apiFavoritesGet().subscribe((res) => {
      this.courseDataSource =
        res.data?.favorites?.map((favorite) => ({
          course_id: favorite.course_id || '',
          main_image: favorite.main_image || '',
          title: favorite.name || '',
          content: favorite.content || '',
          avatar: favorite.teacher_avatar || '',
          name: favorite.teacher_name || '',
          price: favorite.price_quantity![0].price || 0,
          quantity: favorite.price_quantity![0].quantity || 0,
          main_category: favorite.main_category || '',
          sub_category: favorite.sub_category || '',
          rate: favorite.rate || 0,
          ratingCount: favorite.review_count || 0
        })) || [];
    });
  }

  removeFavorite(course_id: string) {
    this.FavoritesService.apiFavoritesDelete({
      favoriteRequestModel: {
        course_id
      }
    }).subscribe(() => {
      this.getFavoriteList();
    });
  }
}
