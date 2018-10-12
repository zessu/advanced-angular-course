import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDlistener]'
})
export class DlistenerDirective {
  private possibleColors: Array<string> = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  constructor() { }

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('focus') onFocus() {
    this.color = this.borderColor = this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
  }
  @HostListener('blur') onBlur() {
    this.color = this.borderColor = this.possibleColors[Math.floor(Math.random() * this.possibleColors.length)];
  }
}
