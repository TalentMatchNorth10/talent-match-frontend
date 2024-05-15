import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule],
  template: `<p>reset-password works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `
})
export class ResetPasswordComponent {}
