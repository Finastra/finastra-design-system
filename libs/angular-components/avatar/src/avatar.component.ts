import { AfterContentInit, Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { BKDRHash } from './bkdr';

export type UxgColor = 'primary' | 'accent' | 'gradient' | 'initials';

@Component({
  selector: 'uxg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements AfterContentInit {
  @ViewChild('avatar', { static: true }) avatar!: ElementRef<HTMLElement>;

  constructor(@Attribute('color') public color: UxgColor = 'gradient', private renderer: Renderer2) {}

  strToHsl(str: string) {
    const hash = BKDRHash(str);
    return `hsl(${hash}, 30%, 60%)`;
  }

  ngAfterContentInit() {
    if (this.color === 'initials') {
      const content = this.avatar.nativeElement.innerText;
      if (content) {
        const hsl = this.strToHsl(content);
        this.renderer.setStyle(this.avatar.nativeElement, 'background', hsl);
      }
    }
  }
}
