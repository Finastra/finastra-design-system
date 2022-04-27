import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ChangeLog } from './changelog.models';

@Component({
  selector: 'uxg-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UXGChangelogComponent {
  @Input() changelog!: ChangeLog;
  @Input() title!: string;
  @Input() subtitle: string = 'Changelog';
  @Input() displayVersion: 'left' | 'top' | 'none' = 'left';
}
