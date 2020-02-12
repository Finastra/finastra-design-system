import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';

import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule, MatMenuModule],
  declarations: [PopoverComponent],
  exports: [PopoverComponent]
})
export class PopoverModule {}
