import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { DlistenerDirective } from './dlistener.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightClassDirective } from './custom-input/highlight-class.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    DlistenerDirective,
    HighlightClassDirective
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
