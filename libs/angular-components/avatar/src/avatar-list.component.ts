import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  ElementRef,
  Renderer2,
  Input,
  Attribute
} from '@angular/core';
import { AvatarComponent } from './avatar.component';

@Component({
  selector: 'uxg-avatar-list',
  templateUrl: './avatar-list.component.html'
})
export class AvatarListComponent implements AfterContentInit {
  @Input() totalLength!: number;
  @ContentChildren(AvatarComponent, { read: ElementRef }) avatars!: QueryList<ElementRef>;

  extra!: number;

  constructor(
    @Attribute('dense') public dense: any,
    @Attribute('large') public large: any,
    private renderer: Renderer2
  ) {}

  ngAfterContentInit() {
    this.avatars.forEach((avatar, i) => {
      this.renderer.setStyle(avatar.nativeElement, 'z-index', this.avatars.length - i);
    });

    if (this.totalLength) {
      this.extra = this.totalLength - this.avatars.length;
    }
  }
}
