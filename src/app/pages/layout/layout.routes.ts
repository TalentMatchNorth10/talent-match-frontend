import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    // 首頁
    path: 'home',
    loadComponent: () => import('../home-page/home-page.component')
  },
  {
    // 關鍵字搜尋結果
    path: 'result-keyword',
    loadComponent: () =>
      import('../result-keyword-page/result-keyword-page.component')
  },
  {
    // 標籤搜尋結果
    path: 'result-tag',
    loadComponent: () => import('../result-tag-page/result-tag-page.component')
  },
  {
    // 課程詳細資訊
    path: 'course-detail/:id',
    loadComponent: () =>
      import('../course-detail-page/course-detail-page.component')
  },
  {
    // 購物車
    path: 'cart',
    loadComponent: () => import('../cart-page/cart-page.component')
  },
  {
    // 老師詳情頁
    path: 'teacher-detail/:id',
    loadComponent: () =>
      import('../teacher/teacher-detail-page/teacher-detail-page.component')
  },
  {
    // 訊息公告頁
    path: 'bulletin',
    loadComponent: () => import('../bulletin-page/bulletin-page.component')
  },
  {
    // 訊息頁
    path: 'chart',
    loadComponent: () => import('../chart-page/chart-page.component')
  },
  {
    // 申請成為老師頁
    path: 'teacher-apply',
    loadComponent: () =>
      import('../teacher-apply-page/teacher-apply-page.component')
  },
  {
    // 學生個人頁
    path: 'student',
    loadChildren: () => import('../student/student.routes')
  },
  {
    // 老師個人頁
    path: 'teacher',
    loadChildren: () => import('../teacher/teacher.routes')
  },
  {
    // 404 頁
    path: 'not-found',
    loadComponent: () => import('../not-found-page/not-found-page.component')
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

export default routes;
