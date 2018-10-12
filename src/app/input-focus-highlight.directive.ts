import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "app-custom-input input" // targets all inputs in a app-custom-input
})
export class InputFocusHighlightDirective {
  focus: boolean;

  constructor() {}

  @HostListener("focus")
  onFocus() {
    this.focus = true;
  }

  @HostListener("blur")
  onBlur() {
    this.focus = false;
  }
}
