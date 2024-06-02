import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { InputComponent, InputSize } from '@tmf/libs-shared/components';
import { SendEmailForm, SendEmailFormKey } from './send-email.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'libs/openapi/src';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-send-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <div
      class="flex h-[100vh] w-full items-center justify-center"
      [formGroup]="form"
    >
      <div
        class="flex w-[80%] min-w-[260px] flex-col items-center rounded-md p-10 shadow-[5px_5px_10px_10px_#F7F7F7] md:w-auto"
      >
        <h1
          class="mb-3 text-[26px] font-semibold text-tmf-orange-1 md:mb-5 md:text-[32px]"
        >
          忘記密碼
        </h1>
        <div class="mb-6 flex flex-col items-center gap-y-1 md:w-[350px]">
          <tmf-input
            class="w-[250px]"
            placeholder="信箱"
            [errorMessage]="getErrorMessage(SendEmailFormKey.EMAIL)"
            [formControlName]="SendEmailFormKey.EMAIL"
            [inputSize]="InputSize.Large"
          ></tmf-input>
        </div>
        <button
          (click)="sendEmail()"
          class="mb-6 w-[200px] rounded-md bg-tmf-orange-2 py-3 text-center font-semibold text-white duration-100 hover:bg-tmf-orange-1 disabled:bg-tmf-gray-5"
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
  private dialogService = inject(DialogService);

  form = this.fb.group<SendEmailForm>({
    [SendEmailFormKey.EMAIL]: this.fb.control('', [Validators.required])
  });

  readonly SendEmailFormKey = SendEmailFormKey;
  readonly InputSize = InputSize;

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
          next: (res) => {
            this.dialogService.openAlertDialog({
              title: '發送成功',
              content: res.data.message
            });
          },
          error: (err) => {
            this.dialogService.openAlertDialog({
              title: '發送失敗',
              content: err.error.message
            });
          }
        });
    }
  }
}
