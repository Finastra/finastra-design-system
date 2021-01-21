export interface Video {
  thumbnail: string;
  alt?: string;
  url: string;
}

export interface VideoWEvent {
  value: any;
  $event: MouseEvent;
}
