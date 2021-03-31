import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
  AfterContentInit,
  ViewChild
} from '@angular/core';
import { DefaultGravatar, AvatarColor } from '@finastra/angular-components/avatar';

import { UserProfile } from './user-profile';
import { UxgUserProfilePanelActionsDirective } from './user-profile-panel-actions.directive';
import { UxgUserProfilePanelContentDirective } from './user-profile-panel-content.directive';
import { UxgUserProfilePanelDetailsDirective } from './user-profile-panel-details.directive';
import { HeaderType } from './user-profile-menu.component';

@Component({
  selector: 'uxg-user-profile-panel',
  templateUrl: './user-profile-panel.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uxg-user-profile-panel',
    '[class.has-content]': 'hasContent'
  }
})
export class UxgUserProfilePanelComponent implements AfterContentInit {
  @Input() user!: UserProfile;
  @Input() defaultGravatar: DefaultGravatar | undefined;
  @Input() color: AvatarColor = 'gradient';
  @Input() headerType: HeaderType = 'title';

  @Input() contentTemplate?: TemplateRef<any>;
  @Input() actionsTemplate?: TemplateRef<any>;
  @Input() detailsTemplate?: TemplateRef<any>;

  @ViewChild('avatarImage', { read: TemplateRef, static: true })
  avatarImage!: TemplateRef<any>;

  @ContentChild(UxgUserProfilePanelContentDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelContent: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelActionsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelActions: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelDetailsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelDetails: TemplateRef<any> | undefined;

  hasContent = false;
  hasFooter = false;
  hasDetails = false;

  constructor() {}

  ngAfterContentInit() {
    this.hasContent = !!this.uxgUserProfilePanelContent || !!this.contentTemplate;
    this.hasFooter = !!this.uxgUserProfilePanelActions || !!this.actionsTemplate;
    this.hasDetails = !!this.uxgUserProfilePanelDetails || !!this.detailsTemplate;
  }
}
