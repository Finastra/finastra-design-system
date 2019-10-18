import { Routes } from '@angular/router';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { FilterTagsDemoComponent } from './components/filter-tags-demo/filter-tags-demo.component';
import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'global-search', component: GlobalSearchDemoComponent, data: { title: 'Global Search Demo' } },
  { path: 'table', component: TableDemoComponent, data: { title: 'Table Demo' } },
  { path: 'popover', component: PopoverDemoComponent, data: { title: 'Popover Demo' } },
  { path: 'filter-tags', component: FilterTagsDemoComponent, data: { title: 'Filter Tags Demo' } },
  { path: 'filter-panel', component: FilterPanelDemoComponent, data: { title: 'Filter Demo' } }
];
