import { NgModule } from '@angular/core';
import { UXGChangelogComponent } from './changelog.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule],
  declarations: [UXGChangelogComponent],
  exports: [UXGChangelogComponent]
})
export class UXGChangelogModule {}
