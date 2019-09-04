import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { TableModule } from '@ffdc/uxg-angular-components/table';

import { routes } from './routes';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { HomeComponent } from './components/home/home.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    GlobalSearchModule,
    TableModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    FormsModule
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
