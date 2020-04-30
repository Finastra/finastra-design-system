import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountCardComponent, AccountCardSkeletonComponent } from './account-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { IconCategoryModule } from '@ffdc/uxg-angular-components/core';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components/skeleton-text';

@NgModule({
  declarations: [AccountCardComponent, AccountCardSkeletonComponent],
  imports: [MatCardModule, MatDividerModule, CommonModule, IconCategoryModule, SkeletonTextModule],
  exports: [AccountCardComponent, AccountCardSkeletonComponent]
})
export class AccountCardModule {}
