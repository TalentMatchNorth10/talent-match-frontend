import { Component, OnInit, inject } from '@angular/core';
import { Step, StepItem } from './cart-page.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardData } from '@tmf/libs-shared/components/card/card.interface';
import {
  GetCartItemsResponseModelDataInner,
  ShopService
} from 'libs/openapi/src';
import { StepperComponent } from './components/stepper/stepper.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderCompletedComponent } from './components/order-completed/order-completed.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StepperComponent,
    CartListComponent,
    CheckoutComponent,
    OrderCompletedComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export default class CartPageComponent implements OnInit {
  private shopService = inject(ShopService);

  stepList: Array<StepItem> = [
    { label: '購物清單', step: Step.Step1 },
    { label: '訂單資訊', step: Step.Step2 },
    { label: '訂單完成', step: Step.Step3 }
  ];
  currentStep: Step = Step.Step1;
  cartDataSource: GetCartItemsResponseModelDataInner[] = [];
  courseDataSource: CardData[] = [];
  selectedArr: GetCartItemsResponseModelDataInner[] | null = null;

  readonly Step = Step;

  ngOnInit(): void {
    this.courseDataSource = FakeCardData;
    this.getCarts();
  }

  getCarts() {
    this.shopService.apiShopCartGet().subscribe((res) => {
      this.cartDataSource = res.data;
    });
  }

  handleSelectedChange(selectedArr: GetCartItemsResponseModelDataInner[]) {
    this.selectedArr = selectedArr;
  }

  handleRemoveItem(purchase_item_id: string) {
    this.shopService
      .apiShopCartIdDelete({ id: purchase_item_id })
      .subscribe(() => {
        this.getCarts();
      });
  }
}

const FakeCardData: CardData[] = [
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
  },
  {
    course_id: '4',
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
    course_id: '5',
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
  }
];
