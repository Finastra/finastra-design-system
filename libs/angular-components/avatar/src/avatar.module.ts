import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
import { AvatarComponent, UxgImageAvatar } from './avatar.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AvatarListComponent, UxgImageAvatar, InitialsPipe],
  exports: [AvatarComponent, AvatarListComponent, UxgImageAvatar, InitialsPipe]
})
export class AvatarModule {}
