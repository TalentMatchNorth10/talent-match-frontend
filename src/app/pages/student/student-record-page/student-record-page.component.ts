import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  OrdersResponseModelDataInner,
  OrdersResponseModelDataInnerPurchaseItemsInner,
  StudentService
} from 'libs/openapi/src';

@Component({
  selector: 'app-student-record-page',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule],
  templateUrl: './student-record-page.component.html',
  styleUrl: './student-record-page.component.scss'
})
export default class StudentRecordPageComponent {
  orderList = signal<OrdersResponseModelDataInner[]>([]);

  constructor(private studentService: StudentService) {
    this.studentService.apiStudentOrdersGet().subscribe((res) => {
      this.orderList.set(res.data || []);
    });
  }

  getTotalPrice(
    purchaseItems: OrdersResponseModelDataInnerPurchaseItemsInner[]
  ) {
    return purchaseItems.reduce((acc, item) => {
      return acc + (item.price || 0);
    }, 0);
  }
}
