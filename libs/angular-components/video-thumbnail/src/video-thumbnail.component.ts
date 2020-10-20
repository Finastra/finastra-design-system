import { Component, Input, Output, EventEmitter } from '@angular/core';
import { VideoWEvent, Video } from './video-thumbnail.interface';

@Component({
  selector: 'uxg-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent {
  @Input() video!: Video;

  @Output() videoClick = new EventEmitter<VideoWEvent>();

  onVideoClick(video: Video, $event: MouseEvent) {
    this.videoClick.emit({
      value: video,
      $event
    });
    $event.preventDefault();
  }
}
