import { Routes } from '@angular/router';
import { checkUserLogin } from '@tmf/shared';

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
    canActivate: [checkUserLogin('提示', '請先登入會員')],
    loadComponent: () => import('../cart-page/cart-page.component')
  },
  {
    // 老師詳情頁
    path: 'detail-teacher/:id',
    loadComponent: () =>
      import('../teacher-detail-page/teacher-detail-page.component')
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
    path: 'apply-teacher',
    canActivate: [checkUserLogin('提示', '請先登入會員')],
    loadComponent: () =>
      import('../teacher-apply-page/teacher-apply-page.component')
  },
  {
    // 訊息頁
    path: 'message',
    canActivate: [checkUserLogin('提示', '請先登入會員')],
    loadComponent: () => import('../message/message.component')
  },
  {
    // 公告頁
    path: 'bulletin',
    canActivate: [checkUserLogin('提示', '請先登入會員')],
    loadComponent: () => import('../bulletin-page/bulletin-page.component')
  },
  /** ==================================  使用者管理 ========================================= */
  {
    path: 'student',
    canActivate: [checkUserLogin('提示', '請先登入會員')],
    loadChildren: () => import('../student/student.routes'),
    data: { state: 'student' }
  },
  {
    path: 'teacher',
    canActivate: [checkUserLogin('提示', '請先登入會員')],
    loadChildren: () => import('../teacher/teacher.routes'),
    data: { state: 'teacher' }
  }
];

export default routes;
