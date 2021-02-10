import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

export interface SearchConfig {
  resultStatusTemplate?: TemplateRef<any>;
  emptySearchTemplate?: TemplateRef<any>;
  resultItemTemplate?: TemplateRef<any>;
  groupBy?: string;
  showFilter?: boolean;
  itemDivider?: boolean;
  groupDivider?: boolean;
  maxItems?: number;
  itemsLayout?: 'row' | 'column';
  searchTermChange: CallableFunction;
  itemClick: CallableFunction;
  searchClose: CallableFunction;
  results: Observable<any[]>;
}
