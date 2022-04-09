import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailsPageComponent} from './details-page.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: DetailsPageComponent,
  }
]

@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DetailsPageModule {
}
