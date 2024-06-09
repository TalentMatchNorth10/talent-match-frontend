import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartTableComponent } from '../cart-table/cart-table.component';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import { GetCartItemsResponseModelDataInner } from 'libs/openapi/src';
import { CardComponent } from '@tmf/libs-shared/components/card/card.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, CartTableComponent, CardComponent],
  templateUrl: `./cart-list.component.html`,
  styleUrl: './cart-list.component.css'
})
export class CartListComponent {
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

  handleSelectedChange(selectedArr: GetCartItemsResponseModelDataInner[]) {
    this.selectedArr = selectedArr;
    this.selectChange.emit(selectedArr);
  }

  handleRemoveItem(purchase_item_id: string) {
    this.removeItem.emit(purchase_item_id);
  }

  checkout() {
    if (!this.selectedArr || this.selectedArr?.length === 0) return;
    this.stepChange.emit();
  }
}
