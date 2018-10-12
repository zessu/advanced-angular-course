import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  testForm: FormGroup;

  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.testForm = this.formBuilder.group({
      customValueAccessor: ['']
    });
  }
}
