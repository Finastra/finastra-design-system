import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { VideoThumbnailComponent } from './video-thumbnail.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [VideoThumbnailComponent],
  exports: [VideoThumbnailComponent]
})
export class VideoThumbnailModule {}
