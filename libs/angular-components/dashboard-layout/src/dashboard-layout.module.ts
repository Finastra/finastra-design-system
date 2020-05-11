import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxgDashboardLayoutComponent } from './dashboard-layout.component';
import { UxpDashboardItemComponent } from './dashboard-item.component';

@NgModule({
  imports: [CommonModule],
  exports: [UxgDashboardLayoutComponent, UxpDashboardItemComponent],
  declarations: [UxgDashboardLayoutComponent, UxpDashboardItemComponent],
  providers: []
})
export class UxgDashboardLayoutModule {}
