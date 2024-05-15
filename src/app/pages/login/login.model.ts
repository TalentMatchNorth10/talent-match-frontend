import { FormControl } from '@angular/forms';

export enum LoginFormKey {
  Email = 'email',
  Password = 'password'
}

export interface LoginForm {
  [LoginFormKey.Email]: FormControl<string | null>;
  [LoginFormKey.Password]: FormControl<string | null>;
}
