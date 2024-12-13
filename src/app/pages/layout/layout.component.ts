import { Component, Signal, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {
  IdentityType,
  MenuService
} from 'src/app/shared/services/menu.service';
import { filter } from 'rxjs';
import { LoadingComponent } from '@tmf/libs-shared/components/loading/loading.component';
import { UserInfoResponseModelData, UserService } from 'libs/openapi/src';
import { AuthStatusService } from 'src/app/shared/services/authStatus.service';
import { UserInfoService } from 'src/app/shared/services/userInfo.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, LoadingComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {
  private router = inject(Router);
  private menuService = inject(MenuService);
  private authStatusService = inject(AuthStatusService);
  private userService = inject(UserService);
  private userInfoService = inject(UserInfoService);

  user = signal<UserInfoResponseModelData | null>(null);
  state: string | null = null;
  menuList: Signal<any> = this.menuService.menuListSig;
  identity: Signal<IdentityType> = this.menuService.identitySig;
  identityText = computed(() => {
    return this.identity() === IdentityType.STUDENT ? '學生' : '老師';
  });
  changeIdentity = computed(() => {
    return {
      text: this.identity() === IdentityType.STUDENT ? '老師' : '學生',
      path: this.identity() === IdentityType.STUDENT ? '/teacher' : '/student'
    };
  });

  readonly IdentityType = IdentityType;

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.startsWith('/student')) {
          this.menuService.updateMenuList(IdentityType.STUDENT);
        } else if (url.startsWith('/teacher')) {
          this.menuService.updateMenuList(IdentityType.TEACHER);
        } else {
          this.menuService.updateMenuList(IdentityType.DEFAULT);
        }
      });

    this.authStatusService.loginStatus$().subscribe((status) => {
      if (status) {
        this.userService.apiUserUserInfoGet().subscribe((res) => {
          this.user.set(res.data);
          this.userInfoService.updateUserInfo(res.data);
          this.menuService.updateMenuList(
            !res.data.is_teacher && this.identity() === IdentityType.TEACHER
              ? IdentityType.STUDENT
              : this.identity()
          );
        });
      } else {
        this.user.set(null);
      }
    });
  }
}
