import { FormControl } from '@angular/forms';

export enum ResetPasswordFormKey {
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirm_password'
}

export interface ResetPasswordForm {
  [ResetPasswordFormKey.PASSWORD]: FormControl<string | null>;
  [ResetPasswordFormKey.CONFIRM_PASSWORD]: FormControl<string | null>;
}
