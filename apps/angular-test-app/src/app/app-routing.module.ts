import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material';
import { GlobalSearchModule } from '@ffdc/uxg-angular-components/global-search';
import { HomeComponent } from './components/home/home.component';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { FilterPanelDemoComponent } from './components/filter-panel-demo/filter-panel-demo.component';

import { routes } from './routes';
import { FilterPanelModule } from '@ffdc/uxg-angular-components/filter-panel';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    GlobalSearchModule,
    FilterPanelModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    HomeComponent,
    GlobalSearchDemoComponent,
    FilterPanelDemoComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }