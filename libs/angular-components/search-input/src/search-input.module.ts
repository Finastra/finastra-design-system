import { NgModule } from '@angular/core';

import { UxgSearchInputComponent } from './search-input.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [UxgSearchInputComponent],
  declarations: [UxgSearchInputComponent]
})
export class UxgSearchInputModule {}
