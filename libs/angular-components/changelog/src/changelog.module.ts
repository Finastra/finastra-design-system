import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UXGChangelogComponent } from './changelog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UXGChangelogComponent],
  exports: [UXGChangelogComponent]
})
export class UXGChangelogModule {}
