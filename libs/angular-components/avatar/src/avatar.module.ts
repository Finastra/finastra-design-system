import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarListComponent } from './avatar-list.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AvatarListComponent, InitialsPipe],
  exports: [AvatarComponent, AvatarListComponent, InitialsPipe]
})
export class AvatarModule {}
