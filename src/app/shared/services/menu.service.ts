import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuList: WritableSignal<any> = signal([]);
  private identity: WritableSignal<string> = signal('');
  menuListSig = this.menuList.asReadonly();
  identitySig = this.identity.asReadonly();

  updateMenuList(identity: 'student' | 'teacher'): void {
    this.identity.set(identity);
    switch (identity) {
      case 'student':
        this.menuList.set([
          {
            icon: 'face',
            path: '/layout2/student/info',
            title: '基本資訊'
          },
          {
            icon: 'favorite',
            path: '/layout2/student/favorites',
            title: '收藏課程'
          },
          {
            icon: 'calendar_today',
            path: '/layout2/student/calendar',
            title: '行事曆'
          },
          {
            icon: 'book',
            path: '/layout2/student/courses',
            title: '已購買課程'
          },
          {
            icon: 'account_balance_wallet',
            path: '/layout2/student/record',
            title: '交易紀錄'
          },
          {
            icon: 'favorite_border',
            path: '/layout2/student/preference',
            title: '喜好類別'
          }
        ]);
        break;
      case 'teacher':
        this.menuList.set([
          {
            icon: 'face',
            path: '/layout2/teacher/info',
            title: '老師個人資訊'
          },
          {
            icon: 'smart_display',
            path: '/layout2/teacher/videos',
            title: '影片管理'
          },
          {
            icon: 'edit_calendar',
            path: '/layout2/teacher/calendar',
            title: '行事曆管理'
          },
          {
            icon: 'description',
            path: '/layout2/teacher/courses',
            title: '課程管理'
          },
          {
            icon: 'account_balance_wallet',
            path: '/layout2/teacher/record',
            title: '老師交易紀錄'
          }
        ]);
        break;
    }
  }
}
