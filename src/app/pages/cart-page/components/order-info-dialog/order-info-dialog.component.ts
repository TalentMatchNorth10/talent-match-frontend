import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CheckoutFormKey, OrderInfoData } from '../../cart-page.model';
import { ShopService } from 'libs/openapi/src';

@Component({
  selector: 'app-order-info-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="flex min-w-[320px] max-w-[90%] flex-col items-center rounded-md bg-white p-5 md:max-w-[600px] lg:min-w-[450px]"
  >
    <h1 class="mb-5 w-full text-center text-[20px] font-bold">訂單資訊</h1>
    <div
      class="flex max-h-[160px] w-full flex-col items-center gap-3 overflow-auto px-4"
    >
      @for (
        courseItem of this.dialogData.courses;
        track courseItem;
        let last = $last
      ) {
        <div
          class="relative flex w-full flex-col rounded-md bg-tmf-gray-6 p-[6px] pl-4"
        >
          <p class="text-[14px] leading-5">{{ courseItem.name }}</p>
          <p class="line-clamp-3 text-[20px] font-bold leading-7">
            NT$ {{ courseItem.price.toLocaleString() }} /
            {{ courseItem.quantity }} 堂課
          </p>
          <div
            class="absolute left-0 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-tmf-orange-1 text-white"
          >
            <span class="material-symbols-outlined text-[20px]"> add </span>
          </div>
        </div>
      }
    </div>

    <div
      class="relative mt-3 flex w-full flex-col items-start rounded-md bg-tmf-orange-1 p-3 pl-5 text-white"
    >
      <p class="text-[16px] leading-6">總金額/項</p>
      <p class="text-[20px] font-bold leading-7">
        NT$ {{ this.dialogData.totalAmount.toLocaleString() }} /
        {{ this.dialogData.totalCount }} 項
      </p>
      <div
        class="absolute left-0 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-tmf-gray-6"
      >
        <span class="material-symbols-outlined text-[20px] text-tmf-orange-1">
          equal
        </span>
      </div>
    </div>

    <div
      class="mt-5 flex w-full flex-col gap-3 border-t-2 border-tmf-gray-3 pt-5"
    >
      <p>
        <span class="text-[14px] leading-5">付款方式：</span>
        <span class="text-[14px] leading-5">{{
          this.dialogData.fieldData[CheckoutFormKey.PURCHASE_WAY]
        }}</span>
      </p>
      <p>
        <span class="text-[14px] leading-5">發票選項：</span>
        <span class="text-[14px] leading-5">{{
          this.dialogData.fieldData[CheckoutFormKey.INVOICE]
        }}</span>
      </p>
      <p>
        <span class="text-[14px] leading-5">付款人電話：</span>
        <span class="text-[14px] leading-5">{{
          this.dialogData.fieldData[CheckoutFormKey.PHONE]
        }}</span>
      </p>
      <p>
        <span class="text-[14px] leading-5">付款人姓名：</span>
        <span class="text-[14px] leading-5">{{
          this.dialogData.fieldData[CheckoutFormKey.NAME]
        }}</span>
      </p>
    </div>

    <div
      class="mt-5 flex w-full justify-center gap-3 border-t-2 border-tmf-gray-3 pt-5"
    >
      <button (click)="close()" class="w-[150px] rounded-md bg-tmf-gray-7 py-2">
        返回
      </button>
      <button
        (click)="sendCheckout()"
        class="w-[150px] rounded-md bg-tmf-orange-1 py-2 text-white"
      >
        確認訂單
      </button>
    </div>
  </div> `,
  styleUrl: './order-info-dialog.component.css'
})
export class OrderInfoDialogComponent {
  private dialog = inject(DialogRef);
  private shopService = inject(ShopService);
  dialogData: OrderInfoData = inject(DIALOG_DATA);

  readonly CheckoutFormKey = CheckoutFormKey;

  close() {
    this.dialog.close();
  }

  sendCheckout() {
    const {
      name,
      phone,
      region,
      city,
      district,
      address,
      purchase_way,
      invoice,
      invoice_way,
      invoice_code,
      natural_certificate,
      tax_id,
      company_letterhead,
      donation_unit
    } = this.dialogData.fieldData;

    this.shopService
      .apiShopPaymentCreatePost({
        paymentCreateRequestModel: {
          name: name!,
          phone: phone!,
          region: region!,
          city: city!,
          district: district!,
          address: address!,
          purchase_way: purchase_way!,
          invoice: invoice!,
          invoice_way: invoice_way!,
          invoice_code: invoice_code!,
          natural_certificate: natural_certificate!,
          tax_id: tax_id!,
          company_letterhead: company_letterhead!,
          donation_unit: donation_unit!,
          purchase_items: this.dialogData.courses.map((course) => ({
            course_id: course.course_id!,
            purchase_item_id: course.purchase_item_id!,
            quantity: course.quantity!
          }))
        }
      })
      .subscribe(() => {
        this.dialog.close();
      });
  }
}
