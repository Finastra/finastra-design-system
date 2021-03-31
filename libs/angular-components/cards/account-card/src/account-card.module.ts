import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountCardComponent, AccountCardSkeletonComponent } from './account-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AccountCardComponent, AccountCardSkeletonComponent],
  imports: [MatCardModule, MatDividerModule, CommonModule, MatIconModule, SkeletonTextModule],
  exports: [AccountCardComponent, AccountCardSkeletonComponent]
})
export class AccountCardModule {}
