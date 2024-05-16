import { FormControl } from '@angular/forms';

export enum LoginFormKey {
  EMAIL = 'email',
  PASSWORD = 'password'
}

export interface LoginForm {
  [LoginFormKey.EMAIL]: FormControl<string | null>;
  [LoginFormKey.PASSWORD]: FormControl<string | null>;
}
