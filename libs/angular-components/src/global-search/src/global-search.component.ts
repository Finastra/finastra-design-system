import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { GlobalSearchOverlayService } from './services/global-search-overlay.service';
import { GlobalSearchService } from './services/global-search.service';
import { SearchOverlayRef } from './components/global-search-overlay/global-search-overlay-ref';

@Component({
  selector: 'uxg-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search-base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UxgGlobalSearch implements OnInit {
  @Input() groupBy: string;
  @Input() resultItemTemplate: TemplateRef<any>;
  @Input() showFilter = true;
  @Input() maxItems: number;
  @Input() itemDivider = true;
  @Input() groupDivider = true;
  @Input() itemsLayout: 'row' | 'column' = 'column';

  @Output() resultItemClick = new EventEmitter();

  constructor(private overlayService: GlobalSearchOverlayService, public searchService: GlobalSearchService) {}

  private ref: SearchOverlayRef;

  openSearch() {
    this.ref = this.overlayService.open({
      resultItemTemplate: this.resultItemTemplate,
      showFilter: this.showFilter,
      groupBy: this.groupBy,
      itemDivider: this.itemDivider,
      groupDivider: this.groupDivider,
      maxItems: this.maxItems,
      itemsLayout: this.itemsLayout
    });
  }

  ngOnInit() {
    this.searchService.itemClicked.subscribe(item => {
      this.resultItemClick.emit(item);
      this.ref.close();
    });
  }
}
