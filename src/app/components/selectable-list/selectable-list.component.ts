import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectableListElementModel} from "./selectable-list-element.model";

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
  styleUrls: ['./selectable-list.component.scss']
})
export class SelectableListComponent{
  @Input()
  selectableElements: SelectableListElementModel<unknown>[] = [];

  @Output()
  onElementSelect = new EventEmitter();

  elementClicked(element: unknown) {
    this.onElementSelect.emit(element);
  }
}
