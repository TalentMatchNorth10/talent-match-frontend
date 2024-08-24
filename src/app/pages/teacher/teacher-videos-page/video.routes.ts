import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./teacher-videos-page.component'),
    data: { state: 'teacher' }
  },
  {
    path: 'add',
    loadComponent: () => import('./component/add/add.component')
  },
  {
    path: 'edit/:id',
    loadComponent: () => import('./component/edit/edit.component')
  }
];

export default routes;
