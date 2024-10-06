import { FormControl } from '@angular/forms';

export enum CourseDetailFormKey {
  NAME = 'name',
  MAIN_IMAGE = 'main_image',
  CONTENT = 'content',
  PRICE_QUANTITY = 'price_quantity',
  MAIN_CATEGORY = 'main_category',
  SUB_CATEGORY = 'sub_category',
  CITY_ID = 'city_id',
  DIST_ID = 'dist_id',
  SURVEY_URL = 'survey_url',
  STATUS = 'status',
  TEACHER_ID = 'teacher_id',
  PURCHASE_MESSAGE = 'purchase_message',
  VIDEO_IDS = 'video_ids',
  FILE_DETAILS = 'file_details',
  FILE_URL_DETAILS = 'file_url_details'
}

export interface PriceQuantity {
  _id: string | null;
  price: number | null;
  quantity: number | null;
}

export interface FileDetails {
  id: string | null;
  name: string | null;
}

export interface FileUrlDetails {
  id: string | null;
  name: string | null;
  url: string | null;
}

export interface CourseDetailForm {
  [CourseDetailFormKey.NAME]: FormControl<string | null>;
  [CourseDetailFormKey.MAIN_IMAGE]: FormControl<string | null>;
  [CourseDetailFormKey.CONTENT]: FormControl<string | null>;
  [CourseDetailFormKey.PRICE_QUANTITY]: FormControl<Array<PriceQuantity> | null>;
  [CourseDetailFormKey.MAIN_CATEGORY]: FormControl<string | null>;
  [CourseDetailFormKey.SUB_CATEGORY]: FormControl<string | null>;
  [CourseDetailFormKey.CITY_ID]: FormControl<string | null>;
  [CourseDetailFormKey.DIST_ID]: FormControl<string | null>;
  [CourseDetailFormKey.SURVEY_URL]: FormControl<string | null>;
  [CourseDetailFormKey.STATUS]: FormControl<number | null>;
  [CourseDetailFormKey.TEACHER_ID]: FormControl<string | null>;
  [CourseDetailFormKey.PURCHASE_MESSAGE]: FormControl<string | null>;
  [CourseDetailFormKey.VIDEO_IDS]: FormControl<Array<string> | null>;
  [CourseDetailFormKey.FILE_DETAILS]: FormControl<Array<FileDetails> | null>;
  [CourseDetailFormKey.FILE_URL_DETAILS]: FormControl<Array<FileUrlDetails> | null>;
}
