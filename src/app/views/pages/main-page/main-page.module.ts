import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {RouterModule, Routes} from "@angular/router";
import {SelectableListModule} from "../../../components/selectable-list/selectable-list.module";
import {PaginationModule} from "../../../components/pagination/pagination.module";
import {PokemonCardModule} from "../../../components/pokemon-card/pokemon-card.module";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  }
]

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SelectableListModule,
    PaginationModule,
    PokemonCardModule
  ]
})
export class MainPageModule { }
