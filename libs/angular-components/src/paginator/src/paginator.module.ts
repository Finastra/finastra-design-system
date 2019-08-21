import { NgModule } from '@angular/core';

import { PaginatorComponent } from './paginator.component';
import { MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [PaginatorComponent],
  imports:[
    MatPaginatorModule
  ],
  exports: [PaginatorComponent]
})
export class PaginatorModule {}
