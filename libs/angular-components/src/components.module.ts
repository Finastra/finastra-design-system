import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSearchModule } from './global-search/src/global-search.module';
import { GlobalSearchService } from './global-search/src/services/global-search.service';
import { ScrollToTopModule } from './scroll-to-top/src/scroll-to-top.module';
import { FilterPanelModule } from './filter-panel/src/filter-panel.module';

@NgModule({
  imports: [CommonModule],
  exports: [GlobalSearchModule, ScrollToTopModule, FilterPanelModule],
  providers: [GlobalSearchService]
})
export class ComponentsModule {}
