import { Component, Signal, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuService } from 'src/app/shared/services/menu.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export default class LayoutComponent {
  private router = inject(Router);
  private menuService = inject(MenuService);

  state: string | null = null;
  menuList: Signal<any> = this.menuService.menuListSig;
  identity: Signal<string> = this.menuService.identitySig;
  identityText = computed(() => {
    return this.identity() === 'student' ? '學生' : '老師';
  });
  changeIdentity = computed(() => {
    return {
      text: this.identity() === 'student' ? '老師' : '學生',
      path: this.identity() === 'student' ? '/teacher' : '/student'
    };
  });

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).url;
        if (url.startsWith('/student')) {
          this.menuService.updateMenuList('student');
        } else if (url.startsWith('/teacher/')) {
          this.menuService.updateMenuList('teacher');
        } else {
          this.menuService.updateMenuList('default');
        }
      });
  }
}
