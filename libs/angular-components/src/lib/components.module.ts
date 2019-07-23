import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalSearchModule } from './global-search/lib/global-search.module';
import { GlobalSearchService } from './global-search/lib/services/global-search.service';
import { GroupByPipe } from './global-search/lib/pipes/group-by.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [GlobalSearchModule],
  providers: [GlobalSearchService, GroupByPipe],
  declarations: [GroupByPipe]
})
export class ComponentsModule {}
