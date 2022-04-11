import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonCardComponent } from './pokemon-card.component';
import {StatBarModule} from "../stat-bar/stat-bar.module";
import {BadgeModule} from "../badge/badge.module";



@NgModule({
    declarations: [
        PokemonCardComponent
    ],
    exports: [
        PokemonCardComponent
    ],
  imports: [
    CommonModule,
    StatBarModule,
    BadgeModule
  ]
})
export class PokemonCardModule { }
