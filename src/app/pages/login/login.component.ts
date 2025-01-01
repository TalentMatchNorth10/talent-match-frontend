import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent, InputSize } from '@tmf/libs-shared/components';
import { LoginForm, LoginFormKey } from './login.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'libs/openapi/src';
import { environment } from 'src/environments/environment';
import { AuthStatusService } from 'src/app/shared/services/authStatus.service';
import { DialogService } from 'src/app/shared/services/dialog.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <div class="flex h-[100vh] w-full items-center justify-center">
      <div
        class="flex w-[80%] min-w-[260px] flex-col items-center rounded-md p-8 shadow-[5px_5px_10px_10px_#F7F7F7] md:w-auto md:p-10"
      >
        <h1
          class="mb-5 text-[26px] font-semibold text-tmf-orange-1 md:text-[32px]"
        >
          登入
        </h1>
        <div class="flex w-full gap-x-10">
          <button
            (click)="googleLogin()"
            class="relative hidden h-[60px] w-[300px] justify-center rounded-md border-2 py-4 duration-100 hover:border-tmf-orange-2 hover:text-tmf-orange-1 md:flex"
          >
            <svg
              class="absolute left-0 top-[50%] ml-4 h-8 w-8 -translate-y-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Google 登入
          </button>
          <div class="flex w-full flex-col items-center md:w-auto">
            <div class="flex w-full flex-col gap-y-2" [formGroup]="form">
              <tmf-input
                placeholder="信箱"
                [formControlName]="LoginFormKey.EMAIL"
                [errorMessage]="getErrorMessage(LoginFormKey.EMAIL)"
                [inputSize]="InputSize.Large"
              ></tmf-input>
              <tmf-input
                placeholder="密碼"
                type="password"
                [formControlName]="LoginFormKey.PASSWORD"
                [errorMessage]="getErrorMessage(LoginFormKey.PASSWORD)"
                [inputSize]="InputSize.Large"
              ></tmf-input>
            </div>
            <a
              (click)="forgetPassword()"
              class="mb-5 cursor-pointer self-end text-[14px] leading-4 text-tmf-gray-3 duration-[200ms] hover:text-tmf-gray-2"
              >忘記密碼</a
            >
            <button
              (click)="login()"
              class="mb-2 w-full rounded-md bg-tmf-orange-2 py-3 text-center font-semibold text-white duration-100 hover:bg-tmf-orange-1 disabled:bg-tmf-gray-5 md:mb-6"
              [disabled]="form.invalid"
            >
              登入
            </button>
            <button
              (click)="googleLogin()"
              class="relative mb-6 flex h-[48px] w-full items-center justify-center rounded-md border-2 duration-100 hover:border-tmf-orange-2 hover:text-tmf-orange-1 md:hidden"
            >
              <svg
                class="absolute left-0 top-[50%] ml-4 h-8 w-8 -translate-y-[50%]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google 登入
            </button>
            <a
              class="text-[14px] leading-4 text-tmf-gray-3"
              (click)="navigateToSignUp()"
              >尚未註冊？<span class="cursor-pointer font-semibold"
                >註冊</span
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private authStatusService = inject(AuthStatusService);
  private dialogService = inject(DialogService);

  form = this.fb.group<LoginForm>({
    [LoginFormKey.EMAIL]: this.fb.control('example@gmail.com', [
      Validators.required,
      Validators.email
    ]),
    [LoginFormKey.PASSWORD]: this.fb.control('12345678', [Validators.required])
  });

  readonly LoginFormKey = LoginFormKey;
  readonly InputSize = InputSize;

  getErrorMessage(key: LoginFormKey) {
    const control = this.form.get(key);
    if (control?.hasError('required')) {
      return '此欄位為必填';
    }
    if (control?.hasError('email')) {
      return '信箱格式不正確';
    }
    return '';
  }

  ngOnInit(): void {
    const { access_token, refresh_token } = this.route.snapshot.queryParams;
    if (access_token && refresh_token) {
      this.authStatusService.setLoginStatus({ access_token, refresh_token });
      this.router.navigate(['/home']);
    }
  }

  login() {
    const { email, password } = this.form.getRawValue();
    if (email && password) {
      this.authService
        .apiAuthLoginPost({
          loginRequestModel: {
            email: email!,
            password: password!
          }
        })
        .subscribe({
          next: (res) => {
            this.authStatusService.setLoginStatus(res.data);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            this.dialogService.openAlertDialog({
              title: '登入失敗',
              content: err.error.message
            });
          }
        });
    }
  }

  googleLogin() {
    location.href = `${environment.apiUrl}/api/auth/google`;
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  forgetPassword() {
    this.router.navigate(['/send-email']);
  }
}
