import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoResponseModelData, UserService } from 'libs/openapi/src';
import { AuthStatusService } from 'src/app/shared/services/authStatus.service';
import { UserMenuItem } from './header.model';

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
          <div class="justify-center mt-2 gap-x-5 flex">
            <!-- 公告 -->
            <button class="relative cursor-pointer">
              <span class="material-icons-outlined">notifications</span>
              <div
                class="rounded-full w-1 h-1 bg-tmf-orange-1 absolute right-0 top-0"
              ></div>
            </button>
            <!-- 購物車 -->
            <button class="relative cursor-pointer">
              <span class="material-icons-outlined">shopping_cart</span>
              <div
                class="rounded-full w-4 h-4 bg-tmf-orange-1 absolute -right-1 -top-1 flex justify-center items-center text-white text-[10px] font-semibold"
              >
                1
              </div>
            </button>
          </div>

          <!-- 未登入顯示 -->
          @if (!user) {
            <div class="flex justify-center items-center gap-x-4">
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
                @if (!user.avator_image) {
                  <img [src]="user.avator_image" alt="avator_image" />
                }
              </div>
              <!-- 使用者名稱 -->
              <p class="text-[18px] leading-7 font-medium hidden lg:block">
                {{ user.nick_name }}
              </p>
              <!-- 使用者選單 -->
              <div
                class="absolute top-full right-0 lg:left-0 pt-[10px] lg:pt-[18px] hidden group-hover:block"
              >
                <ul
                  class="py-3 w-[200px] shadow-[0px_10px_15px_-3px_#0000001A] rounded-b-[12px] border-t border-tmf-purple"
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

  user: UserInfoResponseModelData | null = null;
  selectCity = '台北市';

  userMenuList: Array<Array<UserMenuItem>> = [
    [
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

  ngOnInit(): void {
    this.authStatusService.loginStatus$().subscribe((status) => {
      if (status) {
        this.getUserInfo();
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

  redirect(path: string) {
    this.router.navigate([path]);
  }

  handleMenuClick(menuItem: UserMenuItem) {
    switch (menuItem.label) {
      case '登出':
        this.authStatusService.logout();
        this.router.navigate(['/login']);
        break;
      default:
        break;
    }
  }
}
