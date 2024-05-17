import { FormControl } from '@angular/forms';

export enum SendEmailFormKey {
  EMAIL = 'email'
}

export interface SendEmailForm {
  [SendEmailFormKey.EMAIL]: FormControl<string | null>;
}
