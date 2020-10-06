import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

export type AvatarColor = 'primary' | 'accent' | 'gradient' | 'initials';
export type DefaultGravatar = 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash';
const PALETTE_SIZE = 16;

@Directive({
  selector: 'uxg-image-avatar, [uxg-image-avatar], [uxgImageAvatar]'
})
export class UxgImageAvatar {}

@Component({
  selector: 'uxg-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() gravatarEmail: string | undefined;
  @Input() defaultGravatar: DefaultGravatar | undefined;
  @Input() color: AvatarColor = 'gradient';

  @Input()
  get dense(): boolean {
    return this._dense;
  }
  set dense(value: boolean) {
    this._dense = coerceBooleanProperty(value);
  }
  private _dense = false;

  @Input() avatarImage: TemplateRef<any> | null = null;
  @ContentChild(UxgImageAvatar, { read: TemplateRef, static: true }) _explicitContent: TemplateRef<any> | undefined;
  @ViewChild('implicitContent', { static: true }) _implicitContent!: TemplateRef<any>;

  avatarContent!: TemplateRef<any>;

  paletteColor!: number;
  gravatarUrl!: string;

  constructor() {}

  getCode(str: string) {
    const charCodes = str
      .split('')
      .map((char) => char.charCodeAt(0))
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
    this.avatarContent = this._explicitContent || this.avatarImage || this._implicitContent;
  }
}
