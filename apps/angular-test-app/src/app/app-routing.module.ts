import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatChipsModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '@ffdc/uxg-angular-components';
import { GlobalSearchDemoComponent } from './components/global-search-demo/global-search-demo.component';
import { HomeComponent } from './components/home/home.component';
import { PopoverDemoComponent } from './components/popover-demo/popover-demo.component';
import { TableDemoComponent } from './components/table-demo/table-demo.component';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [HomeComponent, GlobalSearchDemoComponent, TableDemoComponent, PopoverDemoComponent],
  exports: [RouterModule]
})
export class AppRoutingModule {}
