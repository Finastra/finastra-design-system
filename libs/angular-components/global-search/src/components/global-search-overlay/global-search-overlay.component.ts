import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Input,
  ViewChild,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { ReplaySubject, fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchConfig } from './global-search-overlay-config';
import { SearchOverlayRef } from './global-search-overlay-ref';
import { SEARCH_CONFIG } from './global-search-overlay-token';
import { ResultGroup } from '../../global-search.model';

const ANIMATION_TIMINGS = '300ms cubic-bezier(0.25, 0.8, 0.25, 1)';
@Component({
  selector: 'uxg-global-search-overlay',
  templateUrl: './global-search-overlay.component.html',
  encapsulation: ViewEncapsulation.None,
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

  results$ = new ReplaySubject<ResultGroup[]>(1);
  resultsShown = 0;
  resultsFound = 0;
  filterSize = 0;

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

  @Input() results: Observable<ResultGroup[]> = this.config.results;

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemClicked: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;

  private searchDebounce = 300;

  constructor(private readonly ref: SearchOverlayRef, @Inject(SEARCH_CONFIG) private config: SearchConfig) {}

  @HostListener('document:keydown.escape', ['$event']) handleKeydown(event: KeyboardEvent) {
    this.closeSearch();
  }

  ngAfterViewInit() {
    setTimeout(() => this.searchInput.nativeElement.focus());

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(distinctUntilChanged(), debounceTime(this.searchDebounce))
      .subscribe(() => {
        const value = this.searchInput.nativeElement.value;
        this.searchTermChange.emit(value);
      });

    this.results.subscribe(results => {
      this.resultsFound = this.resultsShown = results.length;
      const groupedResults = this.groupByResults(results, this.groupBy);

      this.filterSize = 0;
      this.results$.next(groupedResults);
    });
  }

  closeSearch() {
    this.ref.close();
  }

  onItemClick(item: any) {
    this.itemClicked.emit(item);
  }

  toggleFilter(resultGroup: ResultGroup) {
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

  private get(object: any, path: string | string[], defaultVal?: any): any {
    const PATH = Array.isArray(path) ? path : path.split('.').filter(i => i.length);
    if (!PATH.length) {
      return object === undefined ? defaultVal : object;
    }
    if (object === null || object === undefined || typeof object[PATH[0]] === 'undefined') {
      return defaultVal;
    }
    const firstPathItem = PATH.shift();

    return this.get(firstPathItem ? object[firstPathItem] : undefined, PATH, defaultVal);
  }

  private groupByResults<T>(collection: Array<T>, property: string = ''): ResultGroup[] {
    if (!collection) {
      return [];
    }

    const groupedCollection = collection.reduce<any>((previous, current) => {
      if (!previous[this.get(current, property || '')]) {
        previous[this.get(current, property)] = [current];
      } else {
        previous[this.get(current, property)].push(current);
      }

      return previous;
    }, {});

    return Object.keys(groupedCollection).map(key => ({
      key,
      value: groupedCollection[key]
    }));
  }
}
