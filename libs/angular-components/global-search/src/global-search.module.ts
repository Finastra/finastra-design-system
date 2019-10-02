import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatInputModule
} from '@angular/material';
import { GlobalSearchOverlayComponent } from './components/global-search-overlay/global-search-overlay.component';
import { UxgGlobalSearch } from './global-search.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    OverlayModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false })
  ],
  exports: [UxgGlobalSearch, GlobalSearchOverlayComponent],
  declarations: [UxgGlobalSearch, GlobalSearchOverlayComponent],
  entryComponents: [GlobalSearchOverlayComponent]
})
export class GlobalSearchModule {}
