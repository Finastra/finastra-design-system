import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent, UxgImageAvatar } from './avatar.component';
import { AvatarListComponent } from './avatar-list.component';
import { InitialsPipe } from './initials.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AvatarListComponent, UxgImageAvatar, InitialsPipe],
  exports: [AvatarComponent, AvatarListComponent, UxgImageAvatar, InitialsPipe]
})
export class AvatarModule {}
