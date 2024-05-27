import { Injectable, inject } from '@angular/core';
import { StorageService } from '@tmf/libs-shared/services';
import { BehaviorSubject } from 'rxjs';

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthStatusService {
  private storageService = inject(StorageService);
  private loggedInStatus = new BehaviorSubject<boolean>(false);

  // 設置用戶登入狀態
  setLoginStatus(tokens: Tokens): void {
    this.storageService.setSessionItem('access_token', tokens.access_token);
    this.storageService.setSessionItem('refresh_token', tokens.refresh_token);
    this.loggedInStatus.next(true);
  }

  checkLoginStatus(): void {
    const access_token = this.storageService.getSessionItem('access_token');
    const refresh_token = this.storageService.getSessionItem('refresh_token');
    if (access_token && refresh_token) {
      this.loggedInStatus.next(true);
    }
  }

  // 獲取當前的用戶登入狀態
  getLoginStatus(): boolean {
    return this.loggedInStatus.value;
  }

  // 返回一個可觀察的登入狀態變化，以便其他組件或服務訂閱
  loginStatus$() {
    return this.loggedInStatus.asObservable();
  }

  // 登出
  logout() {
    this.storageService.removeSessionItem('access_token');
    this.storageService.removeSessionItem('refresh_token');
    this.loggedInStatus.next(false);
  }
}
