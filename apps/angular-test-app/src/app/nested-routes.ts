import { Routes } from '@angular/router';

import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { RepeaterDemoComponent } from './components/repeater-demo/repeater-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { VectorMapDemoComponent } from './components/vector-map-demo/vector-map-demo.component';
import { WizardDemoComponent } from './components/wizard-demo/wizard-demo.component';
import { FoundationsDemoComponent } from './components/foundations-demo/foundations-demo.component';
import { UiElementsDemoComponent } from './components/ui-elements-demo/ui-elements-demo.component';
import { SkeletonDemoComponent } from './components/skeleton-demo/skeleton-demo.component';

export const nestedRoutes: { title: string; routes: Routes }[] = [
  {
    title: 'Theme',
    routes: [
      { path: 'foundations', component: FoundationsDemoComponent, data: { title: 'Foundations' } },
      { path: 'ui-elements', component: UiElementsDemoComponent, data: { title: 'UI Elements' } }
    ]
  },
  {
    title: 'Components',
    routes: [
      { path: 'filter-panel', component: FilterPanelDemoComponent, data: { title: 'Filter' } },
      { path: 'global-search', component: GlobalSearchDemoComponent, data: { title: 'Global Search' } },
      { path: 'popover', component: PopoverDemoComponent, data: { title: 'Popover' } },
      { path: 'table', component: TableDemoComponent, data: { title: 'Table' } },
      { path: 'repeater', component: RepeaterDemoComponent, data: { title: 'Repeater' } },
      { path: 'skeleton', component: SkeletonDemoComponent, data: { title: 'Skeleton' } },
      { path: 'vector-map', component: VectorMapDemoComponent, data: { title: 'Vector Map' } },
      { path: 'wizard', component: WizardDemoComponent, data: { title: 'Wizard' } }
    ]
  }
];
