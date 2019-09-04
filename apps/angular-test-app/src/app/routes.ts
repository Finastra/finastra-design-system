import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'global-search', component: GlobalSearchDemoComponent },
  { path: 'table', component: TableDemoComponent }
];
