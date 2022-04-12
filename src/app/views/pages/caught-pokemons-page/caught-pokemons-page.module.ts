import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CaughtPokemonsPageComponent} from "./caught-pokemons-page.component";
import {RouterModule, Routes} from "@angular/router";
import {PaginationModule} from "../../../components/pagination/pagination.module";
import {PokemonCardModule} from "../../../components/pokemon-card/pokemon-card.module";

const routes: Routes = [
  {
    path: '',
    component: CaughtPokemonsPageComponent,
  }
]

@NgModule({
  declarations: [
    CaughtPokemonsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PaginationModule,
    PokemonCardModule
  ]
})
export class CaughtPokemonsPageModule {
}
