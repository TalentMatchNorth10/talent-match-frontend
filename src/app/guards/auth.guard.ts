import { CanActivateFn, Router } from '@angular/router';
import { AuthStatusService } from '../shared/services/authStatus.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authStautsService = inject(AuthStatusService);
  const router = inject(Router);

  if (authStautsService.getLoginStatus()) {
    return true;
  } else {
    alert('請先登入');
    router.navigate(['/login']);
    return false;
  }
};
