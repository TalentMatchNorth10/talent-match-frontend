import { Routes } from '@angular/router';
import { authGuard } from 'src/app/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    // 學生基本資料頁
    path: 'info',
    loadComponent: () =>
      import('./student-info-page/student-info-page.component'),
    canActivate: [authGuard]
  },
  {
    // 學生收藏課程頁
    path: 'favorites',
    loadComponent: () =>
      import('./student-favorites-page/student-favorites-page.component')
  },
  {
    // 學生行事曆頁
    path: 'calendar',
    loadComponent: () =>
      import('./student-calendar-page/student-calendar-page.component')
  },
  {
    // 學生已購買課程頁
    path: 'courses',
    loadComponent: () =>
      import('./student-courses-page/student-courses-page.component')
  },
  {
    // 學生交易紀錄頁
    path: 'record',
    loadComponent: () =>
      import('./student-record-page/student-record-page.component')
  },
  {
    // 學生喜好類別頁
    path: 'preference',
    loadComponent: () =>
      import('./student-preference-page/student-preference-page.component')
  }
];

export default routes;
