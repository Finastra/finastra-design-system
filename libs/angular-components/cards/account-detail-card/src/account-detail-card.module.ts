import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailCardComponent } from './account-detail-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AccountDetailCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [AccountDetailCardComponent]
})
export class AccountDetailCardModule {}
