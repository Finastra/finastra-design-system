import {
  Component,
  ComponentRef,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { GlobalSearchOverlayComponent } from '..';
import { SearchOverlayRef } from './components/global-search-overlay/global-search-overlay-ref';
import { GlobalSearchOverlayService } from './services/global-search-overlay.service';

@Component({
  selector: 'uxg-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UxgGlobalSearch implements OnChanges {
  @Input() groupBy?: string;
  @Input() resultItemTemplate?: TemplateRef<any>;
  @Input() emptySearchTemplate?: TemplateRef<any>;
  @Input() resultStatusTemplate?: TemplateRef<any>;
  @Input() showFilter = true;
  @Input() maxItems?: number;
  @Input() itemDivider = false;
  @Input() groupDivider = false;
  @Input() itemsLayout: 'row' | 'column' = 'column';
  @Input() results: any[] = [];

  @Output() resultItemClick = new EventEmitter();
  @Output() searchTermChange = new EventEmitter<string>();

  results$ = new Subject<any[]>();

  get searchInput(): ElementRef {
    return this.componentRef?.instance.searchInput!;
  }

  get searchIcon(): ElementRef {
    return this.componentRef?.instance.searchIcon!;
  }

  constructor(private overlayService: GlobalSearchOverlayService) {}

  private ref?: SearchOverlayRef;
  private componentRef?: ComponentRef<GlobalSearchOverlayComponent>;

  openSearch() {
    [this.ref, this.componentRef] = this.overlayService.open({
      resultStatusTemplate: this.resultStatusTemplate,
      emptySearchTemplate: this.emptySearchTemplate,
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
      results: this.results$
    });
  }

  closeSearch() {
    if (this.ref) this.ref.close();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('results') && !changes.results.firstChange) {
      this.results$.next(changes.results.currentValue);
    }
  }
}
