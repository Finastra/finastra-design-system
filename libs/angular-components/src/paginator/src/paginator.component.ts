import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { UxgPageEvent } from './utils';
@Component({
  selector: 'uxg-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaginatorComponent implements OnInit, OnDestroy {

  @Input() disabled = false;
  @Input() hidePageSize = false;
  @Input() length: number;
  @Input() pageIndex: number;
  // @Input() pageSize: number;
  @Input() pageSizeOptions: number [];
  @Input() showFirstLastButtons= true;

  @Output() pageChange =  new EventEmitter<UxgPageEvent>();

  ngOnInit() {
  }
  applyPageChanges($event: UxgPageEvent){
    this.pageChange.emit($event);
  }
  ngOnDestroy() {
  }
}
