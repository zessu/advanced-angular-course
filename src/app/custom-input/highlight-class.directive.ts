import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightClass]'
})
export class HighlightClassDirective {
  public focus: boolean;

  constructor() { }

  @HostListener('focus') onFocus() {
    this.focus = true;
  }

  @HostListener('blur') onBlur() {
    this.focus = false;
  }
}
