import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { TableModule } from '@ffdc/uxg-angular-components/table';

import { routes } from './routes';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { HomeComponent } from './components/home/home.component';

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
    MatPaginatorModule
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
