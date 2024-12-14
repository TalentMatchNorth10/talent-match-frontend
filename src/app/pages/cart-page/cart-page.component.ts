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
import { ActivatedRoute } from '@angular/router';

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
  private route = inject(ActivatedRoute);

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
    const orderId = this.route.snapshot.queryParamMap.get('order');
    if (orderId) {
      this.currentStep = Step.Step3;
    } else {
      this.getCarts();
    }
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
