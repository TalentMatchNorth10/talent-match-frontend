import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHideOnError]',
  standalone: true
})
export class HideOnErrorDirective {
  constructor(private el: ElementRef) {}

  @HostListener('error')
  onError() {
    this.el.nativeElement.style.display = 'none';
  }
}
