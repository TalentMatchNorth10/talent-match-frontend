import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    // 教師資訊管理管理頁
    path: 'info',
    loadComponent: () =>
      import('./teacher-info-page/teacher-info-page.component'),
    data: { state: 'teacher' }
  },
  {
    // 老師影片管理頁
    path: 'videos',
    loadComponent: () =>
      import('./teacher-videos-page/teacher-videos-page.component'),
    data: { state: 'teacher' }
  },
  {
    // 老師課程預約管理頁
    path: 'course-reservation',
    loadComponent: () =>
      import('./teacher-calendar-page/teacher-calendar-page.component'),
    data: { state: 'teacher' }
  },
  {
    // 老師課程管理頁
    path: 'courses',
    loadComponent: () =>
      import('./teacher-courses-page/teacher-courses-page.component'),
    data: { state: 'teacher' }
  },
  {
    // 老師交易紀錄頁
    path: 'record',
    loadComponent: () =>
      import('./teacher-record-page/teacher-record-page.component'),
    data: { state: 'teacher' }
  }
];

export default routes;
