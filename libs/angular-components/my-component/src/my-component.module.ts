import { NgModule } from '@angular/core';

import { MyComponentComponent } from './my-component.component';

@NgModule({
  declarations: [MyComponentComponent],
  exports: [MyComponentComponent]
})
export class MyComponentModule {}
