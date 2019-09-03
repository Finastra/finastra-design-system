import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatListModule, MatCheckboxModule } from '@angular/material';

import { UxgGlobalSearch } from './global-search.component';
import { GlobalSearchOverlayComponent } from './components/global-search-overlay/global-search-overlay.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    OverlayModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false })
  ],
  exports: [UxgGlobalSearch, GlobalSearchOverlayComponent],
  declarations: [UxgGlobalSearch, GlobalSearchOverlayComponent],
  entryComponents: [GlobalSearchOverlayComponent]
})
export class GlobalSearchModule {}
