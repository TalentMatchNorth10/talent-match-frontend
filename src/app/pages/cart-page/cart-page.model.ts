import { FormControl } from '@angular/forms';
import { GetCartItemsResponseModelDataInner } from 'libs/openapi/src';

export enum Step {
  Step1 = 'ShoppingList',
  Step2 = 'OrderInfo',
  Step3 = 'OrderComplete'
}

export interface StepItem {
  label: string;
  step: Step;
}

export interface CartItem {
  courseId: string;
  imgUrl: string;
  name: string;
  price: number;
  quantity: number;
  tags: string[];
}

export enum CheckoutFormKey {
  PURCHASE_WAY = 'purchase_way',
  NAME = 'name',
  PHONE = 'phone',
  REGION = 'region',
  CITY = 'city',
  DISTRICT = 'district',
  ADDRESS = 'address',
  INVOICE = 'invoice',
  INVOICE_WAY = 'invoice_way',
  INVOICE_CODE = 'invoice_code',
  NATURAL_CERTIFICATE = 'natural_certificate',
  TAX_ID = 'tax_id',
  COMPANY_LETTERHEAD = 'company_letterhead',
  DONATION_UNIT = 'donation_unit'
}

export interface CheckoutForm {
  [CheckoutFormKey.PURCHASE_WAY]: FormControl<number | null>;
  [CheckoutFormKey.NAME]: FormControl<string | null>;
  [CheckoutFormKey.PHONE]: FormControl<string | null>;
  [CheckoutFormKey.REGION]: FormControl<boolean | null>;
  [CheckoutFormKey.CITY]: FormControl<string | null>;
  [CheckoutFormKey.DISTRICT]: FormControl<string | null>;
  [CheckoutFormKey.ADDRESS]: FormControl<string | null>;
  [CheckoutFormKey.INVOICE]: FormControl<number | null>;
  [CheckoutFormKey.INVOICE_WAY]: FormControl<number | null>;
  [CheckoutFormKey.INVOICE_CODE]: FormControl<string | null>;
  [CheckoutFormKey.NATURAL_CERTIFICATE]: FormControl<string | null>;
  [CheckoutFormKey.TAX_ID]: FormControl<string | null>;
  [CheckoutFormKey.COMPANY_LETTERHEAD]: FormControl<string | null>;
  [CheckoutFormKey.DONATION_UNIT]: FormControl<number | null>;
}

export interface CheckoutFormData {
  [CheckoutFormKey.PURCHASE_WAY]: number | null;
  [CheckoutFormKey.NAME]: string | null;
  [CheckoutFormKey.PHONE]: string | null;
  [CheckoutFormKey.REGION]: boolean | null;
  [CheckoutFormKey.CITY]: string | null;
  [CheckoutFormKey.DISTRICT]: string | null;
  [CheckoutFormKey.ADDRESS]: string | null;
  [CheckoutFormKey.INVOICE]: number | null;
  [CheckoutFormKey.INVOICE_WAY]: number | null;
  [CheckoutFormKey.INVOICE_CODE]: string | null;
  [CheckoutFormKey.NATURAL_CERTIFICATE]: string | null;
  [CheckoutFormKey.TAX_ID]: string | null;
  [CheckoutFormKey.COMPANY_LETTERHEAD]: string | null;
  [CheckoutFormKey.DONATION_UNIT]: number | null;
}

export interface OrderInfoData {
  courses: GetCartItemsResponseModelDataInner[];
  totalAmount: number;
  totalCount: number;
  fieldData: CheckoutFormData;
}
