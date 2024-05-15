import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-send-email',
  standalone: true,
  imports: [CommonModule],
  template: `<p>send-email works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `
})
export class SendEmailComponent {}
