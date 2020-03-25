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

  constructor(
    @Attribute('color') public color: UxgColor = 'gradient',
    @Attribute('dense') public dense: any,
    @Attribute('large') public large: any,
    private renderer: Renderer2
  ) {}

  strToHsl(str: string) {
    const hash = BKDRHash(str);
    return `hsl(${hash}, 30%, 60%)`;
  }

  ngAfterContentInit() {
    const el = this.avatar.nativeElement;
    if (el.childElementCount > 1) {
      throw new Error('Only one element type is allowed as content');
    } else {
      const isTextNode = el.childNodes[0]?.nodeType === Node.TEXT_NODE;
      const isImgNode = el.childNodes[0] instanceof HTMLImageElement;
      if (isTextNode || isImgNode || !el.childNodes.length) {
        if (isTextNode) {
          const [name, surname] = el.innerText.split(' ');
          let initials = name.charAt(0).toUpperCase();
          if (this.dense === null) {
            if (surname) {
              initials += surname.charAt(0).toUpperCase();
            } else if (el.innerText.length >= 2) {
              initials += el.innerText.charAt(1).toUpperCase();
            }
          }
          el.innerText = initials;
          if (this.color === 'initials') {
            const hsl = this.strToHsl(initials);
            this.renderer.setStyle(this.avatar.nativeElement, 'background', hsl);
          }
        }
      } else {
        throw new Error('Only text or image is supported as content');
      }
    }
  }
}
