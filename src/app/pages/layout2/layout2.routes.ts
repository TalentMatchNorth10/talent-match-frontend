import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full'
  },
  {
    path: 'student',
    loadChildren: () => import('../student/student.routes')
  },
  {
    path: 'teacher',
    loadChildren: () => import('../teacher/teacher.routes')
  }
];

export default routes;
