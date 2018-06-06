import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterContentInit,
  ContentChild,
  HostBinding
} from "@angular/core";
import { InputFocusHighlightDirective } from "../input-focus-highlight.directive";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.scss"]
})
export class CustomInputComponent implements AfterContentInit, OnInit {
  @Input()
  icon: string;
  @ContentChild(InputFocusHighlightDirective)
  input: InputFocusHighlightDirective;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {
    if (!this.input) {
      console.error(
        "this custom directive required an input to be projected inside it "
      );
    }
  }

  @HostBinding("class.input-focus")
  get inputFocused() {
    return this.input ? this.input.focus : false;
  }
}
