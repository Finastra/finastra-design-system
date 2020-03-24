import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarListComponent } from './avatar-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AvatarListComponent],
  exports: [AvatarComponent, AvatarListComponent]
})
export class AvatarModule {}
