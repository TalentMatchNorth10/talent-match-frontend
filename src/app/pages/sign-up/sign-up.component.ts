import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpForm, SignUpFormKey } from './sign-up.model';
import { Router } from '@angular/router';
import { InputComponent, InputSize } from '@tmf/libs-shared/components';
import { CustomValidatorError, CustomValidators } from '@tmf/shared';
import { AuthService } from 'libs/openapi/src';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-sign-up',
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
          class="mb-5 text-[26px] font-semibold text-tmf-orange-1 md:text-[32px]"
        >
          註冊
        </h1>
        <div class="mb-6 flex w-full flex-col gap-y-1 md:w-[500px]">
          <tmf-input
            placeholder="暱稱"
            [errorMessage]="getErrorMessage(SignUpFormKey.NICK_NAME)"
            [formControlName]="SignUpFormKey.NICK_NAME"
            [inputSize]="InputSize.Large"
          ></tmf-input>

          <tmf-input
            placeholder="信箱"
            [errorMessage]="getErrorMessage(SignUpFormKey.EMAIL)"
            [formControlName]="SignUpFormKey.EMAIL"
            [inputSize]="InputSize.Large"
          ></tmf-input>

          <tmf-input
            placeholder="密碼(至少八個字元)"
            type="password"
            [errorMessage]="getErrorMessage(SignUpFormKey.PASSWORD)"
            [formControlName]="SignUpFormKey.PASSWORD"
            [inputSize]="InputSize.Large"
          ></tmf-input>

          <tmf-input
            placeholder="確認密碼"
            type="password"
            [errorMessage]="getErrorMessage(SignUpFormKey.CONFIRM_PASSWORD)"
            [formControlName]="SignUpFormKey.CONFIRM_PASSWORD"
            [inputSize]="InputSize.Large"
          ></tmf-input>
        </div>
        <button
          (click)="register()"
          class="mb-6 w-[200px] rounded-md bg-tmf-orange-2 py-3 text-center font-semibold text-white duration-100 hover:bg-tmf-orange-1 disabled:bg-tmf-gray-5"
          [disabled]="form.invalid"
        >
          註冊
        </button>

        <div class="flex w-[240px] flex-col gap-y-2 text-center">
          <p class="text-[12px] leading-4 text-tmf-gray-3">
            點擊「註冊」即代表您同意我們的使用<span
              class="cursor-pointer underline"
              >條款及隱私政策</span
            >
          </p>
          <a class="text-[14px] leading-4 text-tmf-gray-3"
            >已經註冊？<span
              class="cursor-pointer font-semibold"
              (click)="navigateToLogin()"
              >登入</span
            ></a
          >
        </div>
      </div>
      <ng-template #input let-data="data">
        <div class="relative pb-6">
          <input
            class="w-full border-b-2 py-3 outline-none duration-75 focus:border-tmf-orange-1"
            [type]="data.type"
            [placeholder]="data.placeholder"
            [formControlName]="data.key"
          />
          @if (getFormControl(data.key)?.touched) {
            <p class="absolute bottom-0 text-[14px] text-red-500">
              {{ getErrorMessage(data.key) }}
            </p>
          }
        </div>
      </ng-template>
    </div>
  `,
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  private dialogService = inject(DialogService);

  form = this.fb.group<SignUpForm>(
    {
      [SignUpFormKey.NICK_NAME]: this.fb.control('', [Validators.required]),
      [SignUpFormKey.EMAIL]: this.fb.control('', [
        Validators.required,
        Validators.email
      ]),
      [SignUpFormKey.PASSWORD]: this.fb.control('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      [SignUpFormKey.CONFIRM_PASSWORD]: this.fb.control('', [
        Validators.required,
        Validators.minLength(8)
      ])
    },
    {
      validators: [
        CustomValidators.match(
          SignUpFormKey.PASSWORD,
          SignUpFormKey.CONFIRM_PASSWORD
        )
      ]
    }
  );

  get nickNameControl() {
    return this.form.controls[SignUpFormKey.NICK_NAME];
  }

  readonly SignUpFormKey = SignUpFormKey;
  readonly InputSize = InputSize;

  getFormControl(key: SignUpFormKey) {
    return this.form.get(key);
  }

  getErrorMessage(key: SignUpFormKey) {
    const control = this.form.get(key);
    if (control?.hasError('required')) {
      return '此欄位為必填';
    }
    if (control?.hasError('email')) {
      return '信箱格式不正確';
    }
    if (control?.hasError('minlength')) {
      return '密碼至少八個字元';
    }
    if (control?.hasError(CustomValidatorError.NotMatch)) {
      return '密碼不一致';
    }
    return '';
  }

  register() {
    const { nick_name, email, password, confirm_password } =
      this.form.getRawValue();
    this.authService
      .apiAuthRegisterPost({
        registerRequestModel: {
          nick_name: nick_name!,
          email: email!,
          password: password!,
          confirm_password: confirm_password!
        }
      })
      .subscribe({
        next: (res) => {
          this.dialogService
            .openAlertDialog({
              title: '註冊成功',
              content: res.data.message
            })
            .closed.subscribe(() => {
              this.router.navigate(['/login']);
            });
        },
        error: (err) => {
          this.dialogService.openAlertDialog({
            title: '註冊失敗',
            content: err.error.message
          });
        }
      });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
