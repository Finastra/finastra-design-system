import { NgModule } from '@angular/core';

import { NbToArrayPipe } from './nb-to-array.pipe';

@NgModule({
  declarations: [NbToArrayPipe],
  exports: [NbToArrayPipe]
})
export class NbToArrayModule {}
