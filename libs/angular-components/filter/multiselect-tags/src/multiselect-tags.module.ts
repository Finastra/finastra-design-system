import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiselectTagsComponent } from './multiselect-tags.component';

@NgModule({
  declarations: [MultiselectTagsComponent],
  imports: [ReactiveFormsModule, CommonModule, MatIconModule, MatChipsModule],
  exports: [MultiselectTagsComponent]
})
export class MultiselectTagsModule {}
