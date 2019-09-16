import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSearchModule } from './global-search/src/global-search.module';
import { ScrollToTopModule } from './scroll-to-top/src/scroll-to-top.module';
import { UxgTableModule } from './table/src/table.module';
import { PopoverModule } from './popover/src/popover.module';
import { FilterPanelModule } from './filter-panel/src/filter-panel.module';

@NgModule({
  imports: [CommonModule],
  exports: [GlobalSearchModule, ScrollToTopModule, UxgTableModule, PopoverModule, FilterPanelModule]
})
export class ComponentsModule {}
