import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountCardComponent, AccountCardSkeletonComponent } from './account-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { IconCategoryModule } from '@ffdc/uxg-angular-components/core';
import { SkeletonTextModule } from '@ffdc/uxg-angular-components/skeleton-text';

@NgModule({
  declarations: [AccountCardComponent, AccountCardSkeletonComponent],
  imports: [MatCardModule, MatIconModule, MatDividerModule, CommonModule, IconCategoryModule, SkeletonTextModule],
  exports: [AccountCardComponent, AccountCardSkeletonComponent]
})
export class AccountCardModule {}
