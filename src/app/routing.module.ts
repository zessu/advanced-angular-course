import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { CustomvalueaccessorComponent } from './components/customvalueaccessor/customvalueaccessor.component';
import { FlexLayoutComponent } from './pages/flex-layout/flex-layout.component';
import { CanvasComponent } from './pages/canvas/canvas.component';

const routes: Routes = [
    { path: 'custom-button', component: CustomButtonComponent },
    { path: 'custom-input', component: CustomInputComponent },
    { path: 'valueaccessor', component: CustomvalueaccessorComponent },
    { path: 'flex-layout', component: FlexLayoutComponent },
    { path: '', component: CanvasComponent },
    { path: '**', component: CanvasComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }
