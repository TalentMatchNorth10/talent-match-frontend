import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { AuthStatusService } from '../services/authStatus.service';
import { DialogService } from '../services/dialog.service';

export const checkUserLogin = (
  title: string,
  content: string
): CanActivateFn => {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const authStatusService = inject(AuthStatusService);
    const dialogService = inject(DialogService);
    if (!authStatusService.getLoginStatus()) {
      dialogService
        .openAlertDialog({
          title: title || '提示',
          content: content || '請先登入會員'
        })
        .closed.subscribe(() => {
          router.navigate(['/login']);
        });

      return false;
    }
    return true;
  };
};
