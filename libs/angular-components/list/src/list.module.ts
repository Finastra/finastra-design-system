import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule
  ],
  exports: [ListComponent],
})
export class ListModule {}
