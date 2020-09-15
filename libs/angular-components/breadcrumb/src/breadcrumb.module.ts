import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UxgBreadcrumbComponent } from './breadcrumb.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [RouterModule, CommonModule, MatMenuModule, MatIconModule, MatListModule, MatIconModule, MatButtonModule],
  exports: [UxgBreadcrumbComponent],
  declarations: [UxgBreadcrumbComponent]
})
export class UxgBreadcrumbModule {}
