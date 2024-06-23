import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private router = inject(Router);

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

  continueShopping() {
    this.router.navigate(['/result-tag']);
  }

  courseReservation() {
    this.router.navigate(['/student/courses']);
  }
}
