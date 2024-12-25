import { inject, Injectable } from '@angular/core';
import { UserInfoResponseModelData, UserService } from 'libs/openapi/src';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private userService = inject(UserService);

  private userInfo = new BehaviorSubject<UserInfoResponseModelData | null>(
    null
  );

  get userInfo$() {
    return this.userInfo.asObservable();
  }

  reFetchUserInfo() {
    this.userService.apiUserUserInfoGet().subscribe((res) => {
      this.userInfo.next(res.data);
    });
  }

  updateUserInfo(userInfo: UserInfoResponseModelData) {
    this.userInfo.next(userInfo);
  }

  getCurrentUserInfo() {
    return this.userInfo.value;
  }
}
