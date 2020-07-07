import { NgModule } from '@angular/core';

import { EntityMenuComponent, EntityMenuActionsComponent } from './entity-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

const components = [EntityMenuComponent, EntityMenuActionsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatMenuModule],
  exports: [...components]
})
export class EntityMenuModule {}
