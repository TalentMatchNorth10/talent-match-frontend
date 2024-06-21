import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  OrderDetailResponseModelDataInner,
  ShopService
} from 'libs/openapi/src';

@Component({
  selector: 'app-order-completed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-completed.component.html',
  styleUrl: './order-completed.component.css'
})
export class OrderCompletedComponent implements OnInit {
  private shopService = inject(ShopService);
  private route = inject(ActivatedRoute);

  orderId: string | null = null;
  orderList: OrderDetailResponseModelDataInner[] = [];

  @Output() stepChange = new EventEmitter();

  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParamMap.get('order');
    if (this.orderId) {
      this.getOrderList();
    }
  }

  getOrderList() {
    this.shopService
      .apiShopOrderIdGet({
        id: this.orderId!
      })
      .subscribe((res) => {
        this.orderList = res.data;
      });
  }
}
