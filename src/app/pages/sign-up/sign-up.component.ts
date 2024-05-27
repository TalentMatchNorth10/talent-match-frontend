import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignUpForm, SignUpFormKey } from './sign-up.model';
import { Router } from '@angular/router';
import { InputComponent } from '@tmf/libs-shared/components';
import { CustomValidatorError, CustomValidators } from '@tmf/shared';
import { AuthService } from 'libs/openapi/src';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <div
      class="w-full h-[100vh] flex justify-center items-center"
      [formGroup]="form"
    >
      <div
        class="flex flex-col items-center shadow-[5px_5px_10px_10px_#F7F7F7] w-[80%] min-w-[260px] rounded-md p-10 md:w-auto"
      >
        <h1
          class="text-tmf-orange-1 text-[26px] md:text-[32px] font-semibold mb-5"
        >
          註冊
        </h1>
        <div class="flex flex-col gap-y-1 w-full md:w-[500px] mb-6">
          <tmf-input
            placeholder="暱稱"
            [errorMessage]="getErrorMessage(SignUpFormKey.NICK_NAME)"
            [formControlName]="SignUpFormKey.NICK_NAME"
          ></tmf-input>

          <tmf-input
            placeholder="信箱"
            [errorMessage]="getErrorMessage(SignUpFormKey.EMAIL)"
            [formControlName]="SignUpFormKey.EMAIL"
          ></tmf-input>

          <tmf-input
            placeholder="密碼(至少八個字元)"
            type="password"
            [errorMessage]="getErrorMessage(SignUpFormKey.PASSWORD)"
            [formControlName]="SignUpFormKey.PASSWORD"
          ></tmf-input>

          <tmf-input
            placeholder="確認密碼"
            type="password"
            [errorMessage]="getErrorMessage(SignUpFormKey.CONFIRM_PASSWORD)"
            [formControlName]="SignUpFormKey.CONFIRM_PASSWORD"
          ></tmf-input>
        </div>
        <button
          (click)="register()"
          class="bg-tmf-orange-2 text-white font-semibold rounded-md w-[200px] py-3 text-center hover:bg-tmf-orange-1 duration-100 mb-6 disabled:bg-tmf-gray-5"
          [disabled]="form.invalid"
        >
          註冊
        </button>

        <div class="flex flex-col gap-y-2 w-[240px] text-center">
          <p class="text-tmf-gray-3 text-[12px] leading-4">
            點擊「註冊」即代表您同意我們的使用<span
              class="underline cursor-pointer"
              >條款及隱私政策</span
            >
          </p>
          <a class="text-tmf-gray-3 text-[14px] leading-4"
            >已經註冊？<span
              class=" cursor-pointer font-semibold"
              (click)="navigateToLogin()"
              >登入</span
            ></a
          >
        </div>
      </div>
      <ng-template #input let-data="data">
        <div class="relative pb-6">
          <input
            class="border-b-2 outline-none py-3 focus:border-tmf-orange-1 duration-75 w-full"
            [type]="data.type"
            [placeholder]="data.placeholder"
            [formControlName]="data.key"
          />
          @if (getFormControl(data.key)?.touched) {
            <p class="text-red-500 absolute bottom-0 text-[14px]">
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
        next: () => {
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
