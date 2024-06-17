import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-record-page',
  standalone: true,
  imports: [CommonModule, CdkAccordionModule],
  templateUrl: './student-record-page.component.html',
  styleUrl: './student-record-page.component.scss'
})
export default class StudentRecordPageComponent {
  recordList = [
    {
      status: '1',
      date: '2024-06-15',
      order_id: '6651b351e36e83ec16fc345f',
      purchase_way: 2,
      purchase_items: [
        {
          course_id: '1',
          mainImg: 'https://fakeimg.pl/300/',
          title: '課程名稱1',
          price: 1000,
          main_category: '主分類1',
          sub_category: '次分類1'
        },
        {
          course_id: '1',
          mainImg: 'https://fakeimg.pl/300/',
          title: '課程名稱1',
          price: 1000,
          main_category: '主分類1',
          sub_category: '次分類1'
        }
      ]
    },
    {
      status: '1',
      date: '2024-06-15',
      order_id: '6651b351e36e83ec16fc345f',
      purchase_way: 2,
      purchase_items: [
        {
          course_id: '1',
          mainImg: 'https://fakeimg.pl/300/',
          title: '課程名稱1',
          price: 1000,
          main_category: '主分類1',
          sub_category: '次分類1'
        },
        {
          course_id: '1',
          mainImg: 'https://fakeimg.pl/300/',
          title: '課程名稱1',
          price: 1000,
          main_category: '主分類1',
          sub_category: '次分類1'
        }
      ]
    },
    {
      status: '1',
      date: '2024-06-15',
      order_id: '6651b351e36e83ec16fc345f',
      purchase_way: 2,
      purchase_items: [
        {
          course_id: '1',
          mainImg: 'https://fakeimg.pl/300/',
          title: '課程名稱1',
          price: 1000,
          main_category: '主分類1',
          sub_category: '次分類1'
        },
        {
          course_id: '1',
          mainImg: 'https://fakeimg.pl/300/',
          title: '課程名稱1',
          price: 1000,
          main_category: '主分類1',
          sub_category: '次分類1'
        }
      ]
    }
  ];

  stateTramsform(status: string) {
    switch (status) {
      case '1':
        return '處理中';
      case '2':
        return '已完成';
      case '3':
        return '已失敗';
      default:
        return '';
    }
  }

  purchaseWayTransform(purchaseWay: number) {
    switch (purchaseWay) {
      case 1:
        return 'LINE PAY';
      case 2:
        return '信用卡';
      default:
        return '';
    }
  }

  getTotalPrice(purchaseItems: any[]) {
    return purchaseItems.reduce((acc, cur) => acc + cur.price, 0);
  }
}
