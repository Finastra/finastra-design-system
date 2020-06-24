import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GlobalSearchOverlayService } from './services/global-search-overlay.service';
import { SearchOverlayRef } from './components/global-search-overlay/global-search-overlay-ref';
import { ResultGroup } from './global-search.model';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'uxg-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UxgGlobalSearch implements OnInit, OnChanges {
  @Input() groupBy?: string;
  @Input() resultItemTemplate?: TemplateRef<any>;
  @Input() showFilter = true;
  @Input() maxItems?: number;
  @Input() itemDivider = false;
  @Input() groupDivider = false;
  @Input() itemsLayout: 'row' | 'column' = 'column';
  @Input() results: any[] = [];

  @Output() resultItemClick = new EventEmitter();
  @Output() searchTermChange = new EventEmitter<string>();

  results$ = new Subject<any[]>();

  constructor(private overlayService: GlobalSearchOverlayService) {}

  private ref?: SearchOverlayRef;

  openSearch() {
    this.ref = this.overlayService.open({
      resultItemTemplate: this.resultItemTemplate,
      showFilter: this.showFilter,
      groupBy: this.groupBy,
      itemDivider: this.itemDivider,
      groupDivider: this.groupDivider,
      maxItems: this.maxItems,
      itemsLayout: this.itemsLayout,
      searchTermChange: ($event: any) => this.searchTermChange.emit($event),
      itemClicked: ($event: any) => {
        this.resultItemClick.emit($event);
        if (this.ref) this.ref.close();
      },
      results: this.results$,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('results') && !changes.results.firstChange) {
      this.results$.next(changes.results.currentValue);
    }
  }

  ngOnInit() {}
}
