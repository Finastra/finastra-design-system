export interface Breadcrumb {
  label: string;
  url?: string;
  queryParamsHandling?: string;
  icon?: string;
  items?: Breadcrumb[];
  itemClass?: string;
}
