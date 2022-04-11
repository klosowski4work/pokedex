import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import {StatBarModule} from "../stat-bar/stat-bar.module";



@NgModule({
    declarations: [
        PokemonCardComponent
    ],
    exports: [
        PokemonCardComponent
    ],
    imports: [
        CommonModule,
        StatBarModule
    ]
})
export class PokemonCardModule { }
