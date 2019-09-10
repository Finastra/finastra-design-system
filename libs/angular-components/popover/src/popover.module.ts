import { NgModule } from '@angular/core';

import { PopoverComponent } from './popover.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatMenuModule],
  declarations: [PopoverComponent],
  exports: [PopoverComponent]
})
export class PopoverModule {}
