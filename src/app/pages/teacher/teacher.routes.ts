import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    // 老師個人資訊管理頁
    path: 'info',
    loadComponent: () =>
      import('./teacher-info-page/teacher-info-page.component')
  },
  {
    // 老師影片管理頁
    path: 'videos',
    loadComponent: () =>
      import('./teacher-videos-page/teacher-videos-page.component')
  },
  {
    // 老師行事曆管理頁
    path: 'calendar',
    loadComponent: () =>
      import('./teacher-calendar-page/teacher-calendar-page.component')
  },
  {
    // 老師課程管理頁
    path: 'courses',
    loadComponent: () =>
      import('./teacher-courses-page/teacher-courses-page.component')
  },
  {
    // 老師交易紀錄頁
    path: 'record',
    loadComponent: () =>
      import('./teacher-record-page/teacher-record-page.component')
  }
];

export default routes;
