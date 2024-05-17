import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoResponseModelData, UserService } from 'libs/openapi/src';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-between h-[80px] px-[80px] items-center">
      <div class="flex justify-center w-[360px] gap-x-6">
        <div class="flex items-center gap-x-[2px]">
          <span class="material-icons-outlined text-[20px] text-tmf-orange-1"
            >pin_drop</span
          >
          <p class="text-[16px] leading-6">{{ selectCity }}</p>
        </div>
        <span> | </span>
        <div class="flex items-center gap-x-[2px]">
          <span class="material-icons-outlined text-[20px] text-tmf-gray-4"
            >expand_more</span
          >
          <p class="text-[16px] leading-6">探索</p>
        </div>
      </div>
      <img
        (click)="redirect('/home')"
        class="h-[54px] mx-[170px] cursor-pointer"
        src="assets/images/logo.svg"
        alt="logo"
      />
      <div class="flex justify-end items-center w-[360px] gap-x-10">
        <div class="flex justify-center gap-x-5">
          <div class="relative cursor-pointer">
            <span class="material-icons-outlined">notifications</span>
            <div
              class="rounded-full w-1 h-1 bg-tmf-orange-1 absolute right-0 top-0"
            ></div>
          </div>
          <div class="relative cursor-pointer">
            <span class="material-icons-outlined">shopping_cart</span>
            <div
              class="rounded-full w-4 h-4 bg-tmf-orange-1 absolute -right-1 -top-1 flex justify-center items-center text-white text-[10px] font-semibold"
            >
              1
            </div>
          </div>
        </div>

        <!-- 未登入顯示 -->
        <div *ngIf="!user" class="flex justify-center items-center gap-x-4">
          <button
            class="flex w-[120px] h-[40px] justify-center items-center text-tmf-orange-1 border-2 border-tmf-orange-1 rounded-lg gap-x-1 hover:bg-tmf-orange-1 hover:text-white duration-100 active:bg-tmf-orange-2 active:text-white"
          >
            <span class="material-icons-outlined !text-[18px]">handshake</span>
            我要開課
          </button>
          <button
            (click)="redirect('/login')"
            class="flex w-[120px] h-[40px] justify-center items-center bg-tmf-orange-1 text-white rounded-lg gap-x-1 hover:bg-tmf-orange-2 duration-100 active:bg-tmf-orange-1"
          >
            <span class="material-icons-outlined !text-[18px]">handshake</span>
            登入/註冊
          </button>
        </div>

        <!-- 登入顯示 -->
        <div *ngIf="user" class="flex justify-center items-center gap-x-2">
          <div
            class="rounded-full overflow-hidden w-[44px] h-[44px] bg-tmf-gray-5"
          >
            <img
              *ngIf="user.avator_image"
              [src]="user.avator_image"
              alt="avator_image"
            />
          </div>
          <p class="text-[18px] leading-7 font-medium">{{ user.nick_name }}</p>
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class HeaderComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);

  user: UserInfoResponseModelData | null = null;
  selectCity = '台北市';

  ngOnInit(): void {
    this.userService.apiUserUserInfoGet().subscribe({
      next: (res) => {
        this.user = res.data;
      }
    });
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }
}
