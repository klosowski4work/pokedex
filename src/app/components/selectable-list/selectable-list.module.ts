import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableListComponent } from './selectable-list.component';



@NgModule({
  declarations: [
    SelectableListComponent
  ],
  exports: [
    SelectableListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectableListModule { }
