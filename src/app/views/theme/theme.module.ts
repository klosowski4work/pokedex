import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from "./base/base.component";
import {RouterModule} from "@angular/router";
import {BackButtonModule} from "../../components/back-button/back-button.module";
import {ContainerModule} from "../../components/container/container.module";


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    RouterModule,
    BackButtonModule,
    ContainerModule,
  ]
})
export class ThemeModule {
}
