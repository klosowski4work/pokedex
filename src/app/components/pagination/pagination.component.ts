import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() itemsCount = 0;
  @Input() offset = 0;
  @Input() pageSize = 0;
  @Output() pageChanged = new EventEmitter();
  @Input() currentPage = 1;

  firstPage() {
    this.currentPage = 1;
    this.pageChanged.emit(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
    this.pageChanged.emit(this.currentPage);
  }

  nextPage() {
    if(this.currentPage + 1 > this.getLastPage()){
      return;
    }
    this.currentPage = this.currentPage + 1 ;
      this.pageChanged.emit(this.currentPage);
  }

  lastPage() {
    this.currentPage = this.getLastPage();
    this.pageChanged.emit(this.currentPage);
  }

  getLastPage() {
    return Math.floor(this.itemsCount / this.pageSize)
  }
}
