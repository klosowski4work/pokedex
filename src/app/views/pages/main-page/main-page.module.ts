import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {RouterModule, Routes} from "@angular/router";
import {SelectableListModule} from "../../../components/selectable-list/selectable-list.module";

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
    SelectableListModule
  ]
})
export class MainPageModule { }
