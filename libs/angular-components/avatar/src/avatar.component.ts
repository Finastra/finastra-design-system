import { AfterContentInit, Attribute, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

export type UxgColor = 'primary' | 'accent' | 'gradient' | 'initials';
const PALETTE_SIZE = 23;
@Component({
  selector: 'uxg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterContentInit {
  @ViewChild('avatar', { static: true }) avatar!: ElementRef<HTMLElement>;

  constructor(
    @Attribute('color') public color: UxgColor = 'gradient',
    @Attribute('dense') public dense: any,
    @Attribute('large') public large: any,
    private renderer: Renderer2
  ) {}

  getCode(str: string) {
    const charCodes = str
      .split('')
      .map(char => char.charCodeAt(0))
      .join('');
    return parseInt(charCodes, 10);
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
            const color = (this.getCode(initials) % PALETTE_SIZE) + 1;
            this.renderer.addClass(this.avatar.nativeElement, `uxg-avatar-color-${color}`);
          }
        }
      } else {
        throw new Error('Only text or image is supported as content');
      }
    }
  }
}
