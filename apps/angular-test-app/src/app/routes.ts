import { Routes } from '@angular/router';
import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { RepeaterDemoComponent } from './components/repeater-demo/repeater-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'global-search', component: GlobalSearchDemoComponent, data: { title: 'Global Search Demo' } },
  { path: 'table', component: TableDemoComponent, data: { title: 'Table Demo' } },
  { path: 'popover', component: PopoverDemoComponent, data: { title: 'Popover Demo' } },
  { path: 'repeater', component: RepeaterDemoComponent },
  { path: 'filter-panel', component: FilterPanelDemoComponent, data: { title: 'Filter Demo' } },
  { path: 'vector-map', component: VectorMapDemoComponent, data: { title: 'Vector Map' } },
  { path: 'wizard', component: WizardDemoComponent, data: { title: 'Wizard' } },
  { path: 'foundations', component: FoundationsDemoComponent, data: { title: 'Foundations' } },
  { path: 'ui-elements', component: UiElementsDemoComponent, data: { title: 'UI Elements' } }
];
