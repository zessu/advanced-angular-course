import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';

// modules
import { FeatureRoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

// components
import { AppComponent } from './app.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { FlexLayoutComponent } from './pages/flex-layout/flex-layout.component';
import { CustomvalueaccessorComponent } from './components/customvalueaccessor/customvalueaccessor.component';
import { CanvasComponent } from './pages/canvas/canvas.component';

// directives
import { DlistenerDirective } from './dlistener.directive';
import { HighlightClassDirective } from './highlight-class.directive';
import { InputFocusHighlightDirective } from './input-focus-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputComponent,
    DlistenerDirective,
    HighlightClassDirective,
    CustomButtonComponent,
    InputFocusHighlightDirective,
    FlexLayoutComponent,
    CustomvalueaccessorComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FeatureRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'never' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
