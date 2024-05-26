import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InputComponent } from '@tmf/libs-shared/components';
import { SendEmailForm, SendEmailFormKey } from './send-email.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'libs/openapi/src';

@Component({
  selector: 'app-send-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <div
      class="w-full h-[100vh] flex justify-center items-center"
      [formGroup]="form"
    >
      <div
        class="flex flex-col items-center shadow-[5px_5px_10px_10px_#F7F7F7] rounded-md p-10 min-w-[260px] w-[80%] md:w-auto"
      >
        <h1
          class="text-tmf-orange-1 text-[26px] md:text-[32px] font-semibold mb-3 md:mb-5"
        >
          忘記密碼
        </h1>
        <div class="flex flex-col items-center gap-y-1 md:w-[350px] mb-6">
          <tmf-input
            class="w-[250px]"
            placeholder="信箱"
            [errorMessage]="getErrorMessage(SendEmailFormKey.EMAIL)"
            [formControlName]="SendEmailFormKey.EMAIL"
          ></tmf-input>
        </div>
        <button
          (click)="sendEmail()"
          class="bg-tmf-orange-2 text-white font-semibold rounded-md w-[200px] py-3 text-center hover:bg-tmf-orange-1 duration-100 mb-6 disabled:bg-tmf-gray-5"
          [disabled]="form.invalid"
        >
          發送
        </button>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class SendEmailComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  form = this.fb.group<SendEmailForm>({
    [SendEmailFormKey.EMAIL]: this.fb.control('', [Validators.required])
  });

  readonly SendEmailFormKey = SendEmailFormKey;

  getErrorMessage(key: SendEmailFormKey) {
    const control = this.form.get(key);
    if (control?.hasError('required')) {
      return '此欄位為必填';
    }
    return '';
  }

  sendEmail() {
    const { email } = this.form.getRawValue();
    if (email) {
      this.authService
        .apiAuthResetPasswordSendEmailPost({
          resetPasswordSendEmailRequestModel: { email }
        })
        .subscribe({
          error: (err) => {
            console.error(err);
          }
        });
    }
  }
}
