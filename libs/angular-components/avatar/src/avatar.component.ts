import { AfterContentInit, Attribute, Component, Directive, ElementRef, ViewChild } from '@angular/core';

export type UxgColor = 'primary' | 'accent' | 'gradient' | 'initials';
const PALETTE_SIZE = 16;

@Directive({
  selector: 'uxg-image-avatar, [uxg-image-avatar], [uxgImageAvatar]'
})
export class UxgImageAvatar {}

@Component({
  selector: 'uxg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterContentInit {
  @ViewChild('avatar', { static: true }) avatar!: ElementRef<HTMLElement>;

  paletteColor!: number;

  constructor(
    @Attribute('color') public color: UxgColor = 'gradient',
    @Attribute('dense') public dense: any,
    @Attribute('large') public large: any,
    @Attribute('name') public name: string
  ) {}

  getCode(str: string) {
    const charCodes = str
      .split('')
      .map(char => char.charCodeAt(0))
      .join('');
    return parseInt(charCodes, 10);
  }

  ngAfterContentInit() {
    if (this.name && this.color === 'initials') {
      this.paletteColor = (this.getCode(this.name) % PALETTE_SIZE) + 1;
    }
  }
}
