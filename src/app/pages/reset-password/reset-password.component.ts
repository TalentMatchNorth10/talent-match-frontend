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
      class="w-full h-[100vh] flex justify-center items-center"
      [formGroup]="form"
    >
      <div
        class="flex flex-col items-center shadow-[5px_5px_10px_10px_#F7F7F7] rounded-md p-10"
      >
        <h1 class="text-tmf-orange-1 text-[32px] font-semibold mb-5">
          忘記密碼
        </h1>
        <div class="flex flex-col items-center gap-y-1 w-[350px] mb-6">
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
