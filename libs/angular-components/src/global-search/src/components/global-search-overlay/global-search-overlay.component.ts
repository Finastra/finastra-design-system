import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { ReplaySubject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GlobalSearchService, Result, ResultGroup } from '../../services/global-search.service';
import { SearchConfig } from './global-search-overlay-config';
import { SearchOverlayRef } from './global-search-overlay-ref';
import { SEARCH_CONFIG } from './global-search-overlay-token';
import { GroupByPipe } from '../../pipes/group-by.pipe';

const ANIMATION_TIMINGS = '300ms cubic-bezier(0.25, 0.8, 0.25, 1)';
@Component({
  selector: 'uxg-global-search-overlay',
  templateUrl: './global-search-overlay.component.html',
  styleUrls: ['./global-search-overlay.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [GroupByPipe],
  animations: [
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(0, -30%, 0) scale(0.85)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('leave', style({ transform: 'translate3d(0, -30%, 0)', opacity: 0 })),
      transition('* => *', animate(ANIMATION_TIMINGS))
    ])
  ]
})
export class GlobalSearchOverlayComponent implements AfterViewInit {
  animationState: 'void' | 'enter' | 'leave' = 'enter';
  private searchDebounce = 300;
  results$ = new ReplaySubject<ResultGroup[]>(1);
  results: ResultGroup[];
  resultsShown: number;
  resultsFound: number;
  filterSize: number = 0;

  @Input()
  resultItemTemplate = this.config.resultItemTemplate;
  @Input()
  groupBy = this.config.groupBy;
  @Input()
  showFilter = this.config.showFilter;
  @Input()
  maxItems = this.config.maxItems;
  @Input()
  itemDivider = this.config.itemDivider;
  @Input()
  groupDivider = this.config.groupDivider;
  @Input()
  itemsLayout = this.config.itemsLayout;

  @HostListener('document:keydown.escape', ['$event']) handleKeydown(event: KeyboardEvent) {
    this.closeSearch();
  }

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;

  ngAfterViewInit() {
    this.searchInput.nativeElement.focus();

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.searchDebounce)
      )
      .subscribe(() => {
        const value = this.searchInput.nativeElement.value;
        if (value) {
          console.time('[Global Search] Searching index');
          const results = this.searchService.search(value);
          console.timeEnd('[Global Search] Searching index');

          this.resultsFound = this.resultsShown = results.length;
          this.results = this.groupByPipe.transform(results.map(r => r.doc), this.groupBy);

          this.filterSize = 0;
          this.results$.next(this.results);
        } else {
          this.results$.next();
        }
      });
  }

  constructor(
    public searchService: GlobalSearchService,
    private readonly ref: SearchOverlayRef,
    @Inject(SEARCH_CONFIG) private config: SearchConfig,
    private groupByPipe: GroupByPipe<Partial<Result>>
  ) {
  }

  closeSearch() {
    this.ref.close();
  }

  onItemClick(item) {
    this.searchService.onItemClick(item);
  }

  toggleFilter(resultGroup) {
    resultGroup.selected = !resultGroup.selected;
    if (resultGroup.selected) {
      if (this.filterSize === 0) {
        this.resultsShown = 0;
      }
      this.filterSize++;
      this.resultsShown += resultGroup.value.length;
    } else {
      this.filterSize--;
      if (this.filterSize === 0) {
        this.resultsShown = this.resultsFound;
      } else {
        this.resultsShown -= resultGroup.value.length;
      }
    }
  }
}
