import { OptionType } from '@tmf/libs-shared/components';

export interface Option {
  value: number;
  label: string;
  disabled?: boolean;
}

export enum PurchaseWay {
  LINE_PAY = 1,
  CREDIT = 2
}

export const PurchaseWayOptions: Option[] = [
  {
    value: PurchaseWay.CREDIT,
    label: '信用卡'
  },
  {
    value: PurchaseWay.LINE_PAY,
    label: 'LINE Pay',
    disabled: true
  }
];

export enum Invoice {
  PERSONAL = 1,
  COMPANY = 2,
  TRANSFER = 3
}

export const InvoiceOptions: Option[] = [
  {
    value: Invoice.PERSONAL,
    label: '個人發票'
  },
  {
    value: Invoice.COMPANY,
    label: '公司發票'
  },
  {
    value: Invoice.TRANSFER,
    label: '轉帳發票'
  }
];

export enum InvoiceWay {
  EMAIL = 1,
  MOBILE_BARCODE = 2,
  NATURAL_CERTIFICATE = 3
}

export const InvoiceWayOptions: OptionType[] = [
  {
    value: InvoiceWay.EMAIL,
    label: 'Email'
  },
  {
    value: InvoiceWay.MOBILE_BARCODE,
    label: '手機條碼'
  },
  {
    value: InvoiceWay.NATURAL_CERTIFICATE,
    label: '自然人憑證'
  }
];
