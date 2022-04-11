import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() itemsCount = 0;
  @Input() offset = 0;
  @Input() pageSize = 0;
  @Output() pageChanged = new EventEmitter();
  currentPage = 1;

  constructor() {
  }

  ngOnInit(): void {
  }


  firstPage() {
    this.currentPage = 1;
    this.pageChanged.emit(this.currentPage);
  }

  nextPage() {
    this.currentPage = this.currentPage + 1;
    this.pageChanged.emit(this.currentPage);
  }

  previousPage() {
    this.currentPage = this.currentPage - 1;
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
