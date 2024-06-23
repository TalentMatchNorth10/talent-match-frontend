import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
  CommonService,
  GetCartItemsResponseModelDataInner,
  ShopService,
  TagsResponseModelDataInner,
  UserInfoResponseModelData,
  UserService
} from 'libs/openapi/src';
import { AuthStatusService } from 'src/app/shared/services/authStatus.service';
import { CartTotal, UserMenuItem } from './header.model';
import { Animations } from 'src/app/shared/functions/animations';
import {
  InputComponent,
  InputType,
  SearchType,
  OptionComponent,
  OptionType,
  SelectComponent
} from '@tmf/libs-shared/components';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelectComponent,
    OptionComponent,
    InputComponent,
    FormsModule
  ],
  template: `
    <div class="relative z-10 flex justify-center border-b border-tmf-gray-5">
      <div
        class="relative flex h-[64px] w-full items-center justify-between px-6 md:px-[32px] lg:h-[80px] lg:max-w-[1280px]"
      >
        <!-- 導覽區塊 -->
        <div
          class="relative hidden h-full items-center justify-center gap-x-6 lg:flex"
        >
          <div class="group flex h-full items-center gap-x-[2px]">
            <span class="material-icons-outlined text-[20px] text-tmf-orange-1"
              >pin_drop</span
            >
            @if (selectCity) {
              <p class="text-[16px] leading-6">
                {{ selectCity.label }}
              </p>
            }
            <!-- 地區域下拉選單 -->
            <div
              class="absolute right-0 top-full hidden w-[120px] rounded-b-[12px] border-t border-tmf-purple bg-white py-3 pt-[8px] shadow-lg group-hover:block lg:left-0 lg:pt-[16px]"
            >
              <ul class="h-[240px] overflow-y-auto rounded-b-[12px] bg-white">
                @for (
                  option of cityOptions;
                  track option;
                  let lastCartItem = $last
                ) {
                  <li
                    (click)="searchCity(option.value)"
                    class="flex w-full cursor-pointer items-start justify-start gap-x-3 bg-white px-[16px] py-2 duration-100 hover:bg-tmf-orange-3 active:bg-tmf-orange-2"
                  >
                    <p>{{ option.label }}</p>
                  </li>
                }
              </ul>
            </div>
          </div>
          <span> | </span>
          <div class="group relative flex h-full items-center gap-x-[2px]">
            <span
              class="material-icons-outlined text-[20px] text-tmf-gray-4 duration-100 group-hover:-rotate-90"
              >expand_more</span
            >
            <p class="text-[16px] leading-6">探索</p>
            <!-- 分類下拉選單 -->
            <div
              [ngClass]="{
                'w-[360px]': selectTag
              }"
              class="absolute left-0 top-full hidden h-[240px] overflow-hidden rounded-b-lg border-t border-tmf-purple bg-white py-3 shadow-lg group-hover:block"
            >
              <ul
                class="h-full w-[150px] overflow-y-auto rounded-b-[12px] bg-white"
              >
                @for (
                  option of tagOptions;
                  track option;
                  let lastCartItem = $last
                ) {
                  <li
                    class="flex w-full cursor-pointer items-start justify-center gap-x-3 bg-white duration-100"
                  >
                    <p
                      (click)="selectTag = option"
                      [ngClass]="{
                        'bg-tmf-orange-3': selectTag === option
                      }"
                      class="flex items-center gap-2 px-[16px] py-3 active:bg-tmf-orange-2"
                    >
                      {{ option.main_category }}

                      <span
                        [ngClass]="{
                          '-rotate-90': selectTag === option
                        }"
                        class="material-icons-outlined text-tmf-gray-4 duration-100"
                        >expand_more</span
                      >
                    </p>
                    @if (selectTag) {
                      <div
                        class="absolute right-0 top-0 h-[240px] w-[200px] overflow-y-auto bg-white py-3"
                      >
                        <ul class="grid grid-cols-2">
                          @for (sub of selectTag.sub_category; track sub) {
                            <li
                              (click)="searchTag(sub)"
                              class="relative col-span-1 flex h-fit justify-center px-[16px] py-3 text-center hover:bg-tmf-orange-3 active:bg-tmf-orange-2"
                            >
                              {{ sub }}
                            </li>
                          }
                        </ul>
                      </div>
                    }
                  </li>
                }
              </ul>
            </div>
          </div>
          @if (!isIndex) {
            <tmf-input
              class="invisible w-[200px] xl:visible"
              [inputType]="InputType.Search"
              [(ngModel)]="searchInputControl"
              placeholder="快速搜尋"
              (clickSearch)="search($event)"
            ></tmf-input>
          }
        </div>
        <button (click)="toggleSidenav()" class="flex cursor-pointer lg:hidden">
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
                @if (cartList && cartList.length > 0) {
                  <div
                    class="absolute right-2 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-tmf-orange-1 text-[10px] font-semibold text-white"
                  >
                    {{ cartList.length }}
                  </div>
                }
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
                      (click)="redirect('/course-detail/' + cartItem.course_id)"
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
                class="absolute right-0 top-full hidden pt-[10px] group-hover:block lg:left-0 lg:pt-[18px]"
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
                          'mb-2 border-b border-tmf-gray-5':
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

    <!-- 手機板左側選單 -->
    <div
      [ngClass]="{
        'invisible -z-10': !isOpen,
        'z-20': isOpen
      }"
      class="fixed left-0 top-0 h-screen w-full"
    >
      <div
        (click)="toggleSidenav()"
        [@fade]="isOpen ? 'fade-in' : 'fade-out'"
        class="h-full w-full bg-tmf-gray-5 duration-100"
      ></div>
      <div
        [@transform]="isOpen ? 'open' : 'void'"
        class="absolute left-0 top-0 flex h-full w-[320px] flex-col overflow-auto bg-white px-6 py-8 !opacity-100"
      >
        <span
          (click)="toggleSidenav()"
          class="material-icons-outlined mb-5 cursor-pointer text-[24px] text-tmf-gray-2"
          >close</span
        >
        <div class="mb-5 flex items-center gap-4">
          <p class="whitespace-nowrap text-[16px] font-bold leading-6">
            選擇地區
          </p>
          <tmf-select
            class="!w-full max-w-[180px]"
            [formControl]="selectCityControl"
            [icon]="'pin_drop'"
            (selectChange)="searchCity($event); toggleSidenav()"
          >
            @for (option of cityOptions; track option) {
              <tmf-option
                [value]="option.value"
                [label]="option.label"
              ></tmf-option>
            }
          </tmf-select>
        </div>
        <ul class="mb-[40px] flex flex-grow flex-col">
          @for (option of tagOptions; track option; let lastCartItem = $last) {
            <li
              (click)="toggleSelectTag(option)"
              class="flex h-[48px] flex-shrink-0 items-center justify-between border-b border-tmf-gray-6"
            >
              {{ option.main_category }}
              <span
                [ngClass]="{
                  '-rotate-90': selectTag === option
                }"
                class="material-icons-outlined text-tmf-gray-4 duration-100"
                >expand_more</span
              >
            </li>
            @if (selectTag === option) {
              <ul class="max-h-[300px] overflow-auto">
                @for (sub of option.sub_category; track sub) {
                  <li
                    (click)="searchTag(sub); toggleSidenav()"
                    [ngClass]="{
                      'bg-tmf-orange-1 text-white': currentTag === sub
                    }"
                    class="flex h-[48px] items-center justify-between border-b border-tmf-gray-6 px-2 duration-100 hover:bg-tmf-orange-3 active:bg-tmf-orange-2"
                  >
                    {{ sub }}
                  </li>
                }
              </ul>
            }
          }
        </ul>
        @if (!user) {
          <div class="flex flex-col items-center justify-center gap-4">
            <button
              class="flex h-[50px] w-full items-center justify-center gap-x-1 rounded-lg border-2 border-tmf-orange-1 text-tmf-orange-1 duration-100 hover:bg-tmf-orange-1 hover:text-white active:bg-tmf-orange-2 active:text-white"
            >
              <span class="material-icons-outlined !text-[18px]"
                >handshake</span
              >
              我要開課
            </button>
            <button
              (click)="redirect('/login')"
              class="flex h-[50px] w-full items-center justify-center gap-x-1 rounded-lg bg-tmf-orange-1 text-white duration-100 hover:bg-tmf-orange-2 active:bg-tmf-orange-1"
            >
              <span class="material-icons-outlined !text-[18px]"
                >handshake</span
              >
              登入/註冊
            </button>
          </div>
        }
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  animations: [Animations.sidenavAnimation, Animations.backdropAnimation]
})
export class HeaderComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);
  private authStatusService = inject(AuthStatusService);
  private shopService = inject(ShopService);
  private commonService = inject(CommonService);
  private route = inject(ActivatedRoute);
  user: UserInfoResponseModelData | null = null;
  cityOptions: OptionType[] = [];
  selectCity!: OptionType | null;
  selectCityControl = new FormControl();
  tagOptions: TagsResponseModelDataInner[] = [];
  selectTag!: TagsResponseModelDataInner | null;
  currentTag: string = '';
  isIndex = false;
  isOpen: boolean = false;

  userMenuList: Array<Array<UserMenuItem>> = [
    [
      {
        icon: 'face',
        label: '基本資訊管理'
      },
      {
        icon: 'favorite',
        label: '收藏課程'
      },
      {
        icon: 'calendar_today',
        label: '行事曆'
      },
      {
        icon: 'book',
        label: '已購買課程'
      },
      {
        icon: 'account_balance_wallet',
        label: '交易紀錄'
      },
      {
        icon: 'favorite_border',
        label: '喜好類別'
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
  searchInputControl = '';

  readonly InputType = InputType;

  ngOnInit(): void {
    this.getOptions();
    this.authStatusService.loginStatus$().subscribe((status) => {
      if (status) {
        this.getUserInfo();
        this.getCartList();
      } else {
        this.user = null;
      }
    });
    this.setIsIndex(window.location.pathname);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setIsIndex(event.url);
      }
    });
  }

  setIsIndex(url: string) {
    this.isIndex = url === '/home';
  }

  getOptions() {
    this.commonService
      .apiCommonOptionsCityPost({
        cityRequestModel: {
          is_oversea: false
        }
      })
      .subscribe((res) => {
        this.cityOptions = [
          {
            label: '探索全部',
            value: 'all'
          },
          ...res.data
        ];
        this.toggleSelectCity(this.cityOptions[0]);
      });

    this.commonService.apiCommonTagGet().subscribe((res) => {
      this.tagOptions = res.data;
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

  toggleSidenav() {
    this.isOpen = !this.isOpen;
  }

  toggleSelectCity(option: OptionType) {
    if (option.value === this.selectCityControl.value) {
      this.selectCityControl.setValue(null);
      this.selectCity = null;
      return;
    }
    this.selectCityControl.setValue(option.value);
    this.selectCity = option;
  }

  toggleSelectTag(option: TagsResponseModelDataInner) {
    if (option === this.selectTag) {
      this.selectTag = null;
      return;
    }
    this.selectTag = option;
  }

  redirect(path: string) {
    this.router.navigate([path]);
  }

  handleMenuClick(menuItem: UserMenuItem) {
    switch (menuItem.label) {
      case '基本資訊管理':
        this.router.navigate(['/student/info']);
        break;
      case '收藏課程':
        this.router.navigate(['/student/favorites']);
        break;
      case '行事曆':
        this.router.navigate(['/student/calendar']);
        break;
      case '已購買課程':
        this.router.navigate(['/student/courses']);
        break;
      case '交易紀錄':
        this.router.navigate(['/student/record']);
        break;
      case '喜好類別':
        this.router.navigate(['/student/preference']);
        break;
      case '登出':
        this.authStatusService.logout();
        this.router.navigate(['/login']);
        break;
      default:
        break;
    }
  }

  search(e: SearchType) {
    this.router.navigateByUrl(`/result-keyword?keyword=${e.value.trim()}`);
  }

  searchCity(cityId: string) {
    if (cityId === 'all') {
      this.router.navigateByUrl(`/result-tag`);
      return;
    }
    this.router.navigateByUrl(`/result-tag?cityId=${cityId}`);
  }

  searchTag(tag: string) {
    this.router.navigateByUrl(
      `/result-tag?mainCategory=${this.selectTag?.main_category}&subCategory=${tag}`
    );
  }
}
