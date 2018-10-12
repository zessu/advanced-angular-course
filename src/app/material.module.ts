import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule
    ],
})
export class MaterialModule { }
