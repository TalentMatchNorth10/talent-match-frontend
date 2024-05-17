import { FormControl } from '@angular/forms';

export enum SignUpFormKey {
  NICK_NAME = 'nick_name',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm_password'
}

export interface SignUpForm {
  [SignUpFormKey.NICK_NAME]: FormControl<string | null>;
  [SignUpFormKey.EMAIL]: FormControl<string | null>;
  [SignUpFormKey.PASSWORD]: FormControl<string | null>;
  [SignUpFormKey.CONFIRM_PASSWORD]: FormControl<string | null>;
}
