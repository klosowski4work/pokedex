import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeBallComponent } from './poke-ball.component';



@NgModule({
    declarations: [
        PokeBallComponent
    ],
    exports: [
        PokeBallComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PokeBallModule { }
