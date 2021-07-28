import { QueryParamsHandling } from '@angular/router';

export interface Breadcrumb {
  label: string;
  url?: string;
  queryParamsHandling?: QueryParamsHandling;
  icon?: string;
  items?: Breadcrumb[];
  itemClass?: string;
}
