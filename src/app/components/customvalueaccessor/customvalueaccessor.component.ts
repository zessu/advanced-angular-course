import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-customvalueaccessor',
  templateUrl: './customvalueaccessor.component.html',
  styleUrls: ['./customvalueaccessor.component.scss'],
  providers: [ // register this value accessor in angular so we can use formcontrolname = "xxx" on a view
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomvalueaccessorComponent),
      multi: true
    }
  ]
})
export class CustomvalueaccessorComponent implements OnInit, ControlValueAccessor {
  value: any;
  constructor() { }

  propagateChange = (_: any) => { };

  touched = (_: any) => { };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.touched = fn;
  }

  writeValue(value: any) {
    this.value = this.value ? this.value : '';
  }

  ngOnInit() {
  }
}