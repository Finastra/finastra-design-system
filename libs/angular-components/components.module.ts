import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlobalSearchModule } from './global-search/src/global-search.module';
import { PopoverModule } from './popover/src/popover.module';
import { ScrollToTopModule } from './scroll-to-top/src/scroll-to-top.module';
import { UxgTableModule } from './table/src/table.module';

@NgModule({
  imports: [CommonModule],
  exports: [GlobalSearchModule, ScrollToTopModule, UxgTableModule, PopoverModule]
})
export class ComponentsModule {}
