import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { TableModule } from '@ffdc/uxg-angular-components/table';
import { PaginatorModule } from '@ffdc/uxg-angular-components/paginator';

import { routes } from './routes';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PaginatorDemoComponent } from './components/paginator-demo/paginator-demo.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    GlobalSearchModule,
    TableModule,
    PaginatorModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent,
    TableDemoComponent,
    PaginatorDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }