import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  GetCartItemsResponseModelDataInner,
  ShopService,
  UserInfoResponseModelData,
  UserService
} from 'libs/openapi/src';
import { AuthStatusService } from 'src/app/shared/services/authStatus.service';
import { CartItem, CartTotal, UserMenuItem } from './header.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex justify-center border-b border-tmf-gray-5">
      <div
        class="relative flex h-[64px] w-full items-center justify-between px-6 md:px-[32px] lg:h-[80px] lg:max-w-[1280px]"
      >
        <!-- 導覽區塊 -->
        <div class="hidden justify-center gap-x-6 lg:flex">
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
        <button class="flex cursor-pointer lg:hidden">
          <span class="material-icons-outlined text-[24px] text-tmf-gray-4"
            >menu</span
          >
        </button>
        <!-- Logo圖片 -->
        <img
          (click)="redirect('/home')"
          class="h-[33px] cursor-pointer lg:absolute lg:left-[50%] lg:h-[54px] lg:-translate-x-[50%]"
          src="assets/images/logo.svg"
          alt="logo"
        />
        <!-- 使用者區塊 -->
        <div class="flex items-center justify-end gap-x-10">
          <div class="mt-2 flex justify-center gap-x-4">
            <!-- 公告 -->
            <div class="relative cursor-pointer">
              <button
                class="flex h-[40px] w-[48px] cursor-pointer items-center justify-center rounded-lg p-2 duration-100 hover:bg-tmf-gray-6 active:bg-tmf-gray-5"
              >
                <span class="material-icons-outlined">notifications</span>
                <div
                  class="absolute right-2 top-2 h-[6px] w-[6px] rounded-full bg-tmf-orange-1"
                ></div>
              </button>
            </div>
            <!-- 購物車 -->
            <div class="group relative">
              <button
                class="flex h-[40px] w-[48px] cursor-pointer items-center justify-center rounded-lg p-2 duration-100 hover:bg-tmf-gray-6 active:bg-tmf-gray-5"
              >
                <span class="material-icons-outlined cursor-pointer"
                  >shopping_cart</span
                >
                <div
                  class="absolute right-2 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-tmf-orange-1 text-[10px] font-semibold text-white"
                >
                  1
                </div>
              </button>
              <!-- 購物車下拉 -->
              <div
                class="absolute right-0 top-full hidden bg-white pt-[8px] group-hover:block lg:left-0 lg:pt-[16px]"
              >
                <ul
                  class="w-[320px] rounded-b-[12px] border-t border-tmf-purple bg-white py-3 shadow-lg"
                >
                  @for (
                    cartItem of cartList;
                    track cartItem;
                    let lastCartItem = $last
                  ) {
                    <li
                      class="flex min-h-[92px] w-full cursor-pointer items-start justify-start gap-x-3 border-b border-tmf-gray-5 bg-white px-[16px] py-2 duration-100 hover:bg-tmf-orange-3 active:bg-tmf-orange-2"
                    >
                      <div class="h-[48px] w-[84px] bg-tmf-gray-3">
                        @if (cartItem.image) {
                          <img class="h-full w-full" src="" alt="" />
                        }
                      </div>
                      <div class="flex flex-col">
                        <!-- 標籤列 -->
                        <div class="mb-1 flex flex-wrap gap-2">
                          <div
                            class="flex h-[24px] items-center justify-center rounded bg-tmf-gray-5 p-1 text-[12px] leading-4"
                          >
                            {{ cartItem.main_category }}
                          </div>
                          <div
                            class="flex h-[24px] items-center justify-center rounded bg-tmf-gray-5 p-1 text-[12px] leading-4"
                          >
                            {{ cartItem.sub_category }}
                          </div>
                        </div>
                        <!-- 課程名稱 -->
                        <p class="mb-2 text-[14px] font-bold leading-5">
                          {{ cartItem.name }}
                        </p>
                        <!-- 價格 -->
                        <div
                          class="flex items-center justify-between text-[14px] leading-5"
                        >
                          <p class="text-tmf-gray-3">
                            {{ cartItem.quantity }}堂課程
                          </p>
                          <p class="font-medium">NT$：{{ cartItem.price }}</p>
                        </div>
                      </div>
                    </li>
                  }
                  <li
                    class="flex min-h-[84px] w-full flex-col items-start bg-white px-[16px] py-3"
                  >
                    <p class="text-[14px] leading-5 text-tmf-gray-3">
                      共計 {{ cartTotal.courseCount }} 項課程
                    </p>
                    <div
                      class="flex w-full items-center justify-between text-[16px] leading-6"
                    >
                      <p>總計 NT$ {{ cartTotal.total }}</p>
                      <button
                        (click)="redirect('/cart')"
                        class="cursor-pointer rounded-lg bg-tmf-orange-1 px-4 py-2 font-bold text-white"
                      >
                        前往結帳
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 未登入顯示 -->
          @if (!user) {
            <div class="hidden items-center justify-center gap-x-4 lg:flex">
              <button
                class="flex h-[40px] w-[120px] items-center justify-center gap-x-1 rounded-lg border-2 border-tmf-orange-1 text-tmf-orange-1 duration-100 hover:bg-tmf-orange-1 hover:text-white active:bg-tmf-orange-2 active:text-white"
              >
                <span class="material-icons-outlined !text-[18px]"
                  >handshake</span
                >
                我要開課
              </button>
              <button
                (click)="redirect('/login')"
                class="flex h-[40px] w-[120px] items-center justify-center gap-x-1 rounded-lg bg-tmf-orange-1 text-white duration-100 hover:bg-tmf-orange-2 active:bg-tmf-orange-1"
              >
                <span class="material-icons-outlined !text-[18px]"
                  >handshake</span
                >
                登入/註冊
              </button>
            </div>
          } @else {
            <!-- 登入顯示 -->
            <div
              class="group relative flex items-center justify-center gap-x-2"
            >
              <!-- 使用者頭像 -->
              <div
                class="h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-tmf-gray-5"
              >
                @if (user.avator_image) {
                  <img [src]="user.avator_image" alt="avator_image" />
                }
              </div>
              <!-- 使用者名稱 -->
              <p class="hidden text-[18px] font-medium leading-7 lg:block">
                {{ user.nick_name }}
              </p>
              <!-- 使用者選單 -->
              <div
                class="absolute right-0 top-full hidden bg-white pt-[10px] group-hover:block lg:left-0 lg:pt-[18px]"
              >
                <ul
                  class="w-[200px] rounded-b-[12px] border-t border-tmf-purple bg-white py-3 shadow-lg"
                >
                  @for (
                    menuGroup of userMenuList;
                    track menuGroup;
                    let lastGroup = $last
                  ) {
                    @for (
                      menuItem of menuGroup;
                      track menuItem;
                      let lastItem = $last
                    ) {
                      <li
                        (click)="handleMenuClick(menuItem)"
                        [ngClass]="{
                          'mb-2 border-b border-tmf-gray-5 pb-2':
                            lastItem && !lastGroup
                        }"
                        class="flex h-[48px] w-full cursor-pointer items-center justify-start gap-x-2 px-[26px] duration-100 hover:bg-tmf-orange-3 active:bg-tmf-orange-2"
                      >
                        <span class="material-icons-outlined text-tmf-gray-4">{{
                          menuItem.icon
                        }}</span>
                        <p>{{ menuItem.label }}</p>
                      </li>
                    }
                  }
                </ul>
              </div>
            </div>
          }
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
  private authStatusService = inject(AuthStatusService);
  private shopService = inject(ShopService);

  user: UserInfoResponseModelData | null = null;
  selectCity = '台北市';

  userMenuList: Array<Array<UserMenuItem>> = [
    [
      {
        icon: 'face',
        label: '學生個人管理'
      },
      {
        icon: 'face',
        label: '教師資訊管理'
      },
      {
        icon: 'smart_display',
        label: '影片管理'
      },
      {
        icon: 'edit_calendar',
        label: '行事曆管理'
      },
      {
        icon: 'description',
        label: '課程管理'
      },
      {
        icon: 'account_balance_wallet',
        label: '交易紀錄'
      },
      {
        icon: 'settings',
        label: '帳戶管理'
      }
    ],
    [
      {
        icon: 'question_answer',
        label: '訊息'
      },
      {
        icon: 'notifications',
        label: '公告'
      }
    ],
    [
      {
        icon: 'logout',
        label: '登出'
      }
    ]
  ];
  cartList: Array<GetCartItemsResponseModelDataInner> = [];
  cartTotal: CartTotal = {
    courseCount: 0,
    total: 0
  };

  ngOnInit(): void {
    this.authStatusService.loginStatus$().subscribe((status) => {
      if (status) {
        this.getUserInfo();
        this.getCartList();
      } else {
        this.user = null;
      }
    });
  }

  getUserInfo() {
    this.userService.apiUserUserInfoGet().subscribe({
      next: (res) => {
        this.user = res.data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getCartList() {
    this.shopService.apiShopCartGet().subscribe((res) => {
      this.cartList = res.data;
      this.cartTotal = {
        courseCount: res.data.length,
        total: res.data.reduce((acc, cur) => acc + cur.price, 0)
      };
    });
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  handleMenuClick(menuItem: UserMenuItem) {
    switch (menuItem.label) {
      case '學生個人管理':
        this.router.navigate(['/layout2/student']);
        break;
      case '登出':
        this.authStatusService.logout();
        this.router.navigate(['/login']);
        break;
      default:
        break;
    }
  }
}
