import { Component, OnInit, Input, ViewChild, AfterContentInit, ContentChild, HostBinding } from '@angular/core';
import { DlistenerDirective } from '../dlistener.directive';
import { HighlightClassDirective } from './highlight-class.directive';
@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent implements AfterContentInit, OnInit {
  @Input() icon: string;
  @Input() placeholder: string;
  @Input() type: string;
  @ContentChild(HighlightClassDirective) input: HighlightClassDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

  @HostBinding('class.input-focus')
  get inputFocus() {
    return this.input ? this.input.focus : false;
  }
}
