import { Component, ViewEncapsulation, Input } from '@angular/core';
import { ChangeLog } from './changelog.models';

@Component({
  selector: 'uxg-changelog',
  templateUrl: 'changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UXGChangelogComponent {
  @Input() changelog!: ChangeLog;
  @Input() title!: string;
  @Input() displayVersion: 'left' | 'top' | 'none' = 'left';
}
