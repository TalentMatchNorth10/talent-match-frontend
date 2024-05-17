import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStatusService } from './shared/services/authStatus.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private authStatusService = inject(AuthStatusService);

  ngOnInit(): void {
    this.authStatusService.checkLoginStatus();
  }
}
