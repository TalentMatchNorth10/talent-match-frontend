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
        class="relative flex h-[64px] lg:h-[80px] justify-between items-center w-full px-6 md:px-[32px] lg:max-w-[1280px]"
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
        <button class="flex lg:hidden cursor-pointer">
          <span class="material-icons-outlined text-[24px] text-tmf-gray-4"
            >menu</span
          >
        </button>
        <!-- Logo圖片 -->
        <img
          (click)="redirect('/home')"
          class="h-[33px] lg:h-[54px] cursor-pointer lg:left-[50%] lg:-translate-x-[50%] lg:absolute"
          src="assets/images/logo.svg"
          alt="logo"
        />
        <!-- 使用者區塊 -->
        <div class="flex justify-end items-center gap-x-10">
          <div class="justify-center mt-2 gap-x-4 flex">
            <!-- 公告 -->
            <div class="relative cursor-pointer">
              <button
                class="p-2 rounded-lg h-[40px] w-[48px] flex justify-center items-center hover:bg-tmf-gray-6 duration-100 active:bg-tmf-gray-5 cursor-pointer"
              >
                <span class="material-icons-outlined">notifications</span>
                <div
                  class="rounded-full w-[6px] h-[6px] bg-tmf-orange-1 absolute right-2 top-2"
                ></div>
              </button>
            </div>
            <!-- 購物車 -->
            <div class="relative group">
              <button
                class="p-2 rounded-lg h-[40px] w-[48px] flex justify-center items-center hover:bg-tmf-gray-6 duration-100 active:bg-tmf-gray-5 cursor-pointer"
              >
                <span class="material-icons-outlined cursor-pointer"
                  >shopping_cart</span
                >
                <div
                  class="rounded-full w-4 h-4 bg-tmf-orange-1 absolute right-2 top-1 border-2  border-white flex justify-center items-center text-white text-[10px] font-semibold"
                >
                  1
                </div>
              </button>
              <!-- 購物車下拉 -->
              <div
                class="absolute top-full bg-white right-0 lg:left-0 pt-[8px] lg:pt-[16px] hidden group-hover:block"
              >
                <ul
                  class="py-3 w-[320px] shadow-lg rounded-b-[12px] border-t border-tmf-purple bg-white"
                >
                  @for (
                    cartItem of cartList;
                    track cartItem;
                    let lastCartItem = $last
                  ) {
                    <li
                      class="w-full px-[16px] min-h-[92px] border-b border-tmf-gray-5 py-2 flex items-start justify-start gap-x-3 cursor-pointer bg-white hover:bg-tmf-orange-3 active:bg-tmf-orange-2 duration-100"
                    >
                      <div class="w-[84px] h-[48px] bg-tmf-gray-3">
                        @if (cartItem.image) {
                          <img class="w-full h-full" src="" alt="" />
                        }
                      </div>
                      <div class="flex flex-col">
                        <!-- 標籤列 -->
                        <div class="flex flex-wrap gap-2 mb-1">
                          <div
                            class="h-[24px] text-[12px] leading-4 p-1 bg-tmf-gray-5 rounded flex items-center justify-center"
                          >
                            {{ cartItem.main_category }}
                          </div>
                          <div
                            class="h-[24px] text-[12px] leading-4 p-1 bg-tmf-gray-5 rounded flex items-center justify-center"
                          >
                            {{ cartItem.sub_category }}
                          </div>
                        </div>
                        <!-- 課程名稱 -->
                        <p class="text-[14px] leading-5 font-bold mb-2">
                          {{ cartItem.name }}
                        </p>
                        <!-- 價格 -->
                        <div
                          class="flex justify-between items-center text-[14px] leading-5"
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
                    class="flex flex-col items-start w-full px-[16px] min-h-[84px] py-3 bg-white"
                  >
                    <p class="text-[14px] leading-5 text-tmf-gray-3">
                      共計 {{ cartTotal.courseCount }} 項課程
                    </p>
                    <div
                      class="w-full flex justify-between items-center text-[16px] leading-6"
                    >
                      <p>總計 NT$ {{ cartTotal.total }}</p>
                      <button
                        (click)="redirect('/cart')"
                        class="cursor-pointer  px-4 py-2 text-white font-bold bg-tmf-orange-1 rounded-lg"
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
            <div class="justify-center items-center gap-x-4 hidden lg:flex">
              <button
                class="flex w-[120px] h-[40px] justify-center items-center text-tmf-orange-1 border-2 border-tmf-orange-1 rounded-lg gap-x-1 hover:bg-tmf-orange-1 hover:text-white duration-100 active:bg-tmf-orange-2 active:text-white"
              >
                <span class="material-icons-outlined !text-[18px]"
                  >handshake</span
                >
                我要開課
              </button>
              <button
                (click)="redirect('/login')"
                class="flex w-[120px] h-[40px] justify-center items-center bg-tmf-orange-1 text-white rounded-lg gap-x-1 hover:bg-tmf-orange-2 duration-100 active:bg-tmf-orange-1"
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
              class="relative flex justify-center items-center gap-x-2 group"
            >
              <!-- 使用者頭像 -->
              <div
                class="rounded-full overflow-hidden shrink-0 w-[44px] h-[44px] bg-tmf-gray-5"
              >
                @if (user.avator_image) {
                  <img [src]="user.avator_image" alt="avator_image" />
                }
              </div>
              <!-- 使用者名稱 -->
              <p class="text-[18px] leading-7 font-medium hidden lg:block">
                {{ user.nick_name }}
              </p>
              <!-- 使用者選單 -->
              <div
                class="absolute top-full right-0 lg:left-0 pt-[10px] lg:pt-[18px] bg-white hidden group-hover:block"
              >
                <ul
                  class="py-3 w-[200px] shadow-lg rounded-b-[12px] border-t border-tmf-purple bg-white"
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
                          'border-b border-tmf-gray-5 pb-2 mb-2':
                            lastItem && !lastGroup
                        }"
                        class="w-full px-[26px] h-[48px] flex items-center justify-start gap-x-2 cursor-pointer hover:bg-tmf-orange-3 active:bg-tmf-orange-2 duration-100"
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
