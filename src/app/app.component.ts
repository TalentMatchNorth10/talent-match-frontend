import { MenuService } from './shared/services/menu.service';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  OnInit,
  inject
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AuthStatusService } from './shared/services/authStatus.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit {
  private authStatusService = inject(AuthStatusService);
  private menuService = inject(MenuService);
  private router = inject(Router);

  ngOnInit(): void {
    this.authStatusService.checkLoginStatus();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const url = event.url;
          if (url.startsWith('/layout2/student')) {
            this.menuService.updateMenuList('student');
          } else if (url.startsWith('/layout2/teacher')) {
            this.menuService.updateMenuList('teacher');
          }
        }
      });
  }
}
