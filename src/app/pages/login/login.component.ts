import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '@tmf/libs-shared/components';
import { LoginForm, LoginFormKey } from './login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent],
  template: `
    <div class="w-full h-[100vh] flex justify-center items-center">
      <div
        class="flex flex-col items-center shadow-[5px_5px_10px_10px_#F7F7F7] rounded-md p-10"
      >
        <h1 class="text-tmf-orange-1 text-[32px] font-semibold mb-5">登入</h1>
        <div class="flex gap-x-10">
          <div>
            <button
              class="relative border-2 rounded-md py-4 flex justify-center w-[300px] hover:border-tmf-orange-2 hover:text-tmf-orange-1 duration-100"
            >
              <svg
                class="absolute left-0 top-[50%] -translate-y-[50%] w-8 h-8 ml-4"
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
          </div>
          <div class="flex flex-col items-center">
            <div class="flex flex-col gap-y-2 w-[300px]" [formGroup]="form">
              <tmf-input
                placeholder="信箱"
                [formControlName]="LoginFormKey.Email"
              ></tmf-input>
              <tmf-input
                placeholder="密碼"
                [formControlName]="LoginFormKey.Password"
              ></tmf-input>
            </div>
            <a
              class="text-tmf-gray-3 text-[14px] leading-4 self-end mb-5 cursor-pointer hover:text-tmf-gray-2 duration-[200ms]"
              >忘記密碼</a
            >
            <button
              class="bg-tmf-orange-2 text-white font-semibold rounded-md w-full py-3 text-center hover:bg-tmf-orange-1 duration-100 mb-6 disabled:bg-tmf-gray-5"
              [disabled]="form.invalid"
            >
              登入
            </button>
            <a
              class="text-tmf-gray-3 text-[14px] leading-4"
              (click)="navigateToSignUp()"
              >尚未註冊？<span class=" cursor-pointer font-semibold"
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
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  form = this.fb.group<LoginForm>({
    [LoginFormKey.Email]: this.fb.control(null, [
      Validators.required,
      Validators.email
    ]),
    [LoginFormKey.Password]: this.fb.control(null, [Validators.required])
  });

  readonly LoginFormKey = LoginFormKey;

  login() {
    // TODO: 串接登入 API
  }

  googleLogin() {
    // TODO: 串接 Google 登入 API
  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }
}
