import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
  Attribute,
  ViewChild
} from '@angular/core';
import { UserProfile } from './user-profile';
import { UxgUserProfilePanelActionsDirective } from './user-profile-panel-actions.directive';
import { UxgUserProfilePanelContentDirective } from './user-profile-panel-content.directive';
import { UxgUserProfilePanelDetailsDirective } from './user-profile-panel-details.directive';
import { DefaultGravatar, AvatarColor } from '@finastra/angular-components/avatar';
import { MatMenuTrigger } from '@angular/material/menu';
export type HeaderType = 'hero' | 'title';

@Component({
  selector: 'uxg-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uxg-user-profile-menu'
  }
})
export class UxgUserProfileMenuComponent {
  @Input() user!: UserProfile;
  @Input() defaultGravatar: DefaultGravatar | undefined;
  @Input() color: AvatarColor = 'gradient';
  @Input() headerType: HeaderType = 'title';

  @ViewChild('avatarImage', { read: TemplateRef, static: true })
  avatarImage!: TemplateRef<any>;

  @ViewChild(MatMenuTrigger, { static: true })
  userMenuTrigger!: MatMenuTrigger;

  @ContentChild(UxgUserProfilePanelContentDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelContent: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelActionsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelActions: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelDetailsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelDetails: TemplateRef<any> | undefined;

  constructor(@Attribute('dense') public dense: any) {}
}
