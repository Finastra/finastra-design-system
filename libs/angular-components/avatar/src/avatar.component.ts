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
    if (this.name) {
      const [name, surname] = this.name.split(' ');
      let initials = name.charAt(0).toUpperCase();
      if (this.dense === null) {
        if (surname) {
          initials += surname.charAt(0).toUpperCase();
        } else if (this.name.length >= 2) {
          initials += this.name.charAt(1).toUpperCase();
        }
      }
      this.avatar.nativeElement.innerText = initials;
      if (this.color === 'initials') {
        this.paletteColor = (this.getCode(initials) % PALETTE_SIZE) + 1;
      }
    }
  }
}
