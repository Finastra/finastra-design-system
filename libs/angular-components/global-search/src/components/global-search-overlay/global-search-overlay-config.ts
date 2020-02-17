import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ResultGroup } from '../../global-search.model';

export interface SearchConfig {
  resultItemTemplate?: TemplateRef<any>;
  groupBy?: string;
  showFilter?: boolean;
  itemDivider?: boolean;
  groupDivider?: boolean;
  maxItems?: number;
  itemsLayout?: 'row' | 'column';
  searchTermChange: CallableFunction;
  itemClicked: CallableFunction;
  results: Observable<ResultGroup[]>
}
