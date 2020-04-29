import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IconCategoryComponent } from './icon-category.component';

@NgModule({
  declarations: [IconCategoryComponent],
  imports: [MatIconModule],
  exports: [IconCategoryComponent]
})
export class IconCategoryModule {}
