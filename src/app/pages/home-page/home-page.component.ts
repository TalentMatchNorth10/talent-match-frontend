import { Component, OnInit, inject } from '@angular/core';
import { UserService } from 'libs/openapi/src';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent implements OnInit {
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.apiUserUserInfoGet().subscribe({
      next: (res) => {},
      error: (err) => {
        console.error(err);
      }
    });
  }
}
