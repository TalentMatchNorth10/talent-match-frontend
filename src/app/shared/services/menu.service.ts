import { Injectable, WritableSignal, signal } from '@angular/core';

export enum IdentityType {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  DEFAULT = 'DEFAULT'
}
@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: WritableSignal<any> = signal([]);
  private identity: WritableSignal<IdentityType> = signal(IdentityType.DEFAULT);
  menuListSig = this.menuList.asReadonly();
  identitySig = this.identity.asReadonly();

  updateMenuList(identity: IdentityType): void {
    this.identity.set(identity);
    switch (identity) {
      case IdentityType.STUDENT:
        this.menuList.set([
          {
            icon: 'face',
            path: '/student/info',
            title: '基本資訊'
          },
          {
            icon: 'favorite',
            path: '/student/favorites',
            title: '收藏課程'
          },
          {
            icon: 'calendar_today',
            path: '/student/calendar',
            title: '行事曆'
          },
          {
            icon: 'book',
            path: '/student/courses',
            title: '已購買課程'
          },
          {
            icon: 'account_balance_wallet',
            path: '/student/record',
            title: '交易紀錄'
          },
          {
            icon: 'favorite_border',
            path: '/student/preference',
            title: '喜好類別'
          }
        ]);
        break;
      case IdentityType.TEACHER:
        this.menuList.set([
          {
            icon: 'face',
            path: '/teacher/info',
            title: '教師資訊管理'
          },
          {
            icon: 'smart_display',
            path: '/teacher/videos',
            title: '影片管理'
          },
          {
            icon: 'edit_calendar',
            path: '/teacher/course-reservation',
            title: '課程預約管理'
          },
          {
            icon: 'description',
            path: '/teacher/courses',
            title: '課程管理'
          },
          {
            icon: 'account_balance_wallet',
            path: '/teacher/record',
            title: '老師交易紀錄'
          }
        ]);
        break;
    }
  }
}
