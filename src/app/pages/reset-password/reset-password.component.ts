import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@tmf/libs-shared/components';
import {
  ResetPasswordForm,
  ResetPasswordFormKey
} from './reset-password.model';
import { AuthService } from 'libs/openapi/src';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <div
      class="flex h-[100vh] w-full items-center justify-center"
      [formGroup]="form"
    >
      <div
        class="flex flex-col items-center rounded-md p-10 shadow-[5px_5px_10px_10px_#F7F7F7]"
      >
        <h1 class="mb-5 text-[32px] font-semibold text-tmf-orange-1">
          忘記密碼
        </h1>
        <div class="mb-6 flex w-[350px] flex-col items-center gap-y-1">
          <tmf-input
            class="w-[250px]"
            placeholder="密碼"
            [errorMessage]="getErrorMessage(ResetPasswordFormKey.PASSWORD)"
            [formControlName]="ResetPasswordFormKey.PASSWORD"
          ></tmf-input>
          <tmf-input
            class="w-[250px]"
            placeholder="確認密碼"
            [errorMessage]="
              getErrorMessage(ResetPasswordFormKey.CONFIRM_PASSWORD)
            "
            [formControlName]="ResetPasswordFormKey.CONFIRM_PASSWORD"
          ></tmf-input>
        </div>
        <button
          (click)="resetPassword()"
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
export class ResetPasswordComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  resetPasswordToken: string | null = null;

  form = this.fb.group<ResetPasswordForm>({
    [ResetPasswordFormKey.PASSWORD]: this.fb.control('', [Validators.required]),
    [ResetPasswordFormKey.CONFIRM_PASSWORD]: this.fb.control('', [
      Validators.required
    ])
  });

  readonly ResetPasswordFormKey = ResetPasswordFormKey;

  getErrorMessage(key: ResetPasswordFormKey) {
    const control = this.form.get(key);
    if (control?.hasError('required')) {
      return '此欄位為必填';
    }
    return '';
  }

  ngOnInit(): void {
    this.resetPasswordToken = this.route.snapshot.queryParams['token'];
  }

  resetPassword() {
    const { password, confirm_password } = this.form.getRawValue();
    if (password && confirm_password) {
      this.authService
        .apiAuthResetPasswordUpdatePost({
          resetPasswordUpdateRequestModel: {
            password,
            confirm_password,
            ...(this.resetPasswordToken
              ? { token: this.resetPasswordToken }
              : {})
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
  }
}
