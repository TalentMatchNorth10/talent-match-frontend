import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  InputComponent,
  InputType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { Invoice, InvoiceWay, PurchaseWay } from '../../cart-page.const';
import { CheckoutForm, CheckoutFormKey } from '../../cart-page.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  CommonService,
  GetCartItemsResponseModelDataInner
} from 'libs/openapi/src';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { OrderInfoDialogComponent } from '../order-info-dialog/order-info-dialog.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    DialogModule,
    SelectComponent,
    OptionComponent,
    InputComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  private fb = inject(FormBuilder);
  private dialog = inject(Dialog);
  private commonService = inject(CommonService);

  @Input() selectedArr: GetCartItemsResponseModelDataInner[] | null = [];

  purchaseWayOptions: OptionType[] = [];
  invoiceOptions: OptionType[] = [];
  invoiceWayOptions: OptionType[] = [];
  regionOptions: OptionType[] = [];
  cityOptions: OptionType[] = [];
  distOptions: OptionType[] = [];

  checkoutForm = this.fb.group<CheckoutForm>({
    [CheckoutFormKey.PURCHASE_WAY]: this.fb.control(PurchaseWay.CREDIT, [
      Validators.required
    ]),
    [CheckoutFormKey.NAME]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.PHONE]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.REGION]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.CITY]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.DISTRICT]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.ADDRESS]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.INVOICE]: this.fb.control(Invoice.PERSONAL, [
      Validators.required
    ]),
    [CheckoutFormKey.INVOICE_WAY]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.INVOICE_CODE]: this.fb.control(null, [
      Validators.required
    ]),
    [CheckoutFormKey.NATURAL_CERTIFICATE]: this.fb.control(null, [
      Validators.required
    ]),
    [CheckoutFormKey.TAX_ID]: this.fb.control(null, [Validators.required]),
    [CheckoutFormKey.COMPANY_LETTERHEAD]: this.fb.control(null, [
      Validators.required
    ]),
    [CheckoutFormKey.DONATION_UNIT]: this.fb.control(null, [
      Validators.required
    ])
  });

  get purchase_way() {
    return this.checkoutForm.controls[CheckoutFormKey.PURCHASE_WAY];
  }

  get invoice() {
    return this.checkoutForm.controls[CheckoutFormKey.INVOICE];
  }

  get invoice_way() {
    return this.checkoutForm.controls[CheckoutFormKey.INVOICE_WAY];
  }

  get region() {
    return this.checkoutForm.controls[CheckoutFormKey.REGION];
  }

  get city() {
    return this.checkoutForm.controls[CheckoutFormKey.CITY];
  }

  get totalCount(): number {
    if (!this.selectedArr || !this.selectedArr.length) return 0;
    return this.selectedArr.length;
  }

  get totalAmount(): string {
    if (!this.selectedArr || !this.selectedArr.length) return '0';
    return this.selectedArr
      .reduce((acc, cur) => acc + cur.price, 0)
      .toLocaleString();
  }

  get formInvalid(): boolean {
    const commonKeys = [
      CheckoutFormKey.PURCHASE_WAY,
      CheckoutFormKey.NAME,
      CheckoutFormKey.PHONE,
      CheckoutFormKey.REGION,
      CheckoutFormKey.CITY,
      CheckoutFormKey.DISTRICT,
      CheckoutFormKey.ADDRESS,
      CheckoutFormKey.INVOICE
    ];

    const { invoice, invoice_way } = this.checkoutForm.getRawValue();

    switch (invoice) {
      case Invoice.PERSONAL:
        switch (invoice_way) {
          case InvoiceWay.MOBILE_BARCODE:
            commonKeys.push(CheckoutFormKey.INVOICE_CODE);
            break;
          case InvoiceWay.NATURAL_CERTIFICATE:
            commonKeys.push(CheckoutFormKey.NATURAL_CERTIFICATE);
            break;
          case InvoiceWay.EMAIL:
            break;
        }
        break;
      case Invoice.COMPANY:
        commonKeys.push(CheckoutFormKey.TAX_ID);
        commonKeys.push(CheckoutFormKey.COMPANY_LETTERHEAD);
        break;
      case Invoice.TRANSFER:
        commonKeys.push(CheckoutFormKey.DONATION_UNIT);
        break;
    }

    return commonKeys.some((key) => this.checkoutForm.get(key)?.invalid);
  }

  readonly CheckoutFormKey = CheckoutFormKey;
  readonly InputType = InputType;
  readonly Invoice = Invoice;
  readonly InvoiceWay = InvoiceWay;

  getErrorMessage(key: CheckoutFormKey) {
    const control = this.checkoutForm.get(key);
    if (control?.hasError('required')) {
      return '此欄位為必填';
    }
    return '';
  }

  ngOnInit() {
    this.setOptions();
    this.handleValueChange();
  }

  setOptions() {
    this.commonService.apiCommonOptionsPaymentWayGet().subscribe((res) => {
      this.purchaseWayOptions = res.data.map((item) => {
        if (item.label === 'LINE_PAY') {
          return {
            ...item,
            disabled: true
          };
        } else {
          return item;
        }
      });
    });
    this.commonService.apiCommonOptionsInvoiceGet().subscribe((res) => {
      this.invoiceOptions = res.data;
    });
    this.commonService.apiCommonOptionsInvoiceWayGet().subscribe((res) => {
      this.invoiceWayOptions = res.data;
    });
    this.commonService.apiCommonOptionsRegionGet().subscribe((res) => {
      this.regionOptions = res.data;
    });
  }

  handleValueChange() {
    this.region.valueChanges.subscribe((region) => {
      if (typeof region !== 'boolean') return;

      this.commonService
        .apiCommonOptionsCityPost({
          cityRequestModel: {
            is_oversea: region
          }
        })
        .subscribe((res) => {
          this.cityOptions = res.data;
        });
    });

    this.city.valueChanges.subscribe((city) => {
      const region = this.region.value;
      if (typeof region !== 'boolean' || typeof city !== 'string') return;

      this.commonService
        .apiCommonOptionsDistPost({
          districtRequestModel: {
            is_oversea: region,
            city_id: city
          }
        })
        .subscribe((res) => {
          this.distOptions = res.data;
        });
    });
  }

  changeControlValue(key: CheckoutFormKey, value: any) {
    this.checkoutForm.get(key)?.setValue(value);
  }

  previewOrder() {
    this.dialog.open(OrderInfoDialogComponent, {
      data: {
        courses: this.selectedArr,
        totalAmount: this.totalAmount,
        totalCount: this.totalCount,
        fieldData: this.checkoutForm.getRawValue()
      }
    });
  }
}
