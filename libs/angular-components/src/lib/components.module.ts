import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSearchModule } from './global-search/lib/global-search.module';
import { GlobalSearchService } from './global-search/lib/services/global-search.service';
import { GroupByPipe } from './global-search/lib/pipes/group-by.pipe';
import { ScrollToTopModule } from './scroll-to-top/scroll-to-top.module';

@NgModule({
  imports: [CommonModule],
  exports: [GlobalSearchModule, ScrollToTopModule],
  providers: [GlobalSearchService, GroupByPipe],
  declarations: [GroupByPipe]
})
export class ComponentsModule {}
