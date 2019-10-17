import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatChipsModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { routes } from './routes';
import { MaterialModule } from './material.module';
import { FilterTagsDemoComponent } from './components/filter-tags-demo/filter-tags-demo.component';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { ScrollToTopModule } from '@ffdc/uxg-angular-components/scroll-to-top';
import { PopoverModule } from '@ffdc/uxg-angular-components/popover';
import { UxgTableModule } from '@ffdc/uxg-angular-components/table';
import { FilterTagsModule } from '@ffdc/uxg-angular-components/filter-tags';

@NgModule({
  imports: [
    GlobalSearchModule,
    ScrollToTopModule,
    PopoverModule,
    UxgTableModule,
    FilterTagsModule,
    CommonModule, MaterialModule, RouterModule.forRoot(routes)
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent, PopoverDemoComponent, FilterTagsDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
