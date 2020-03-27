import { NgModule } from '@angular/core';

import { EntityMenuComponent } from './entity-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EntityMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [EntityMenuComponent],
})
export class EntityMenuModule {}
