import { Attribute, Component, Directive, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

export type UxgColor = 'primary' | 'accent' | 'gradient' | 'initials';
export type DefaultGravatar = 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash';
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
export class AvatarComponent implements OnInit {
  @ViewChild('avatar', { static: true }) avatar!: ElementRef<HTMLElement>;

  paletteColor!: number;
  gravatarUrl!: string;

  @Input() name!: string;
  @Input() gravatarEmail!: string;
  @Input() defaultGravatar!: DefaultGravatar;

  constructor(
    @Attribute('color') public color: UxgColor = 'gradient',
    @Attribute('dense') public dense: any,
    @Attribute('large') public large: any
  ) {}

  getCode(str: string) {
    const charCodes = str
      .split('')
      .map(char => char.charCodeAt(0))
      .join('');
    return parseInt(charCodes, 10);
  }

  generateGravatar() {
    const rand = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);

    const gravatarHash = this.gravatarEmail ? Md5.hashStr(this.gravatarEmail) : Md5.hashStr(rand);
    this.gravatarUrl = `//gravatar.com/avatar/${gravatarHash}?s=512`;
    if (this.defaultGravatar && !this.gravatarEmail) {
      this.gravatarUrl = `${this.gravatarUrl}&default=${this.defaultGravatar}`;
    }
  }

  ngOnInit() {
    if (this.name && this.color === 'initials') {
      this.paletteColor = (this.getCode(this.name) % PALETTE_SIZE) + 1;
    }

    if (this.gravatarEmail || this.defaultGravatar) {
      this.generateGravatar();
    }
  }
}
