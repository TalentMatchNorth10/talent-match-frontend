import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then((m) => m.SignUpComponent)
  },
  {
    path: 'send-email',
    loadComponent: () =>
      import('./pages/send-email/send-email.component').then(
        (m) => m.SendEmailComponent
      )
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import('./pages/reset-password/reset-password.component').then(
        (m) => m.ResetPasswordComponent
      )
  },
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout.component'),
    loadChildren: () => import('./pages/layout/layout.routes')
  }
];
