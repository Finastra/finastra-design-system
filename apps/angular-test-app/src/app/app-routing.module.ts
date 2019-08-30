import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';

import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    GlobalSearchModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
