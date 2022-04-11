import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatBarComponent } from './stat-bar.component';



@NgModule({
    declarations: [
        StatBarComponent
    ],
    exports: [
        StatBarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StatBarModule { }
