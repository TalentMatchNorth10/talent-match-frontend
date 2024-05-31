import { MenuService } from './../../shared/services/menu.service';
import { Component, Signal, computed, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-layout2',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './layout2.component.html',
  styleUrl: './layout2.component.scss'
})
export default class Layout2Component {
  private menuService = inject(MenuService);
  menuList: Signal<any> = this.menuService.menuListSig;
  identity: Signal<string> = this.menuService.identitySig;
  identityText = computed(() => {
    return this.identity() === 'student' ? '學生' : '老師';
  });
  changeIdentity = computed(() => {
    return {
      text: this.identity() === 'student' ? '老師' : '學生',
      path:
        this.identity() === 'student' ? '/layout2/teacher' : '/layout2/student'
    };
  });
}
