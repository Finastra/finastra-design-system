import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
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
  declarations: [UxgGlobalSearch, GlobalSearchOverlayComponent]
})
export class GlobalSearchModule {}
