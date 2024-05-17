import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  styles: `
    :host {
      display: block;
    }
  `
})
export class FooterComponent {}