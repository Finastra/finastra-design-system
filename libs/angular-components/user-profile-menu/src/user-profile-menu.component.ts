import {
  Component,
  OnInit,
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
import { DefaultGravatar, AvatarColor } from '@ffdc/uxg-angular-components/avatar';
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
export class UxgUserProfileMenuComponent implements OnInit {
  @Input() user!: UserProfile;
  @Input() defaultGravatar: DefaultGravatar | undefined;
  @Input() color: AvatarColor = 'gradient';

  @ViewChild('avatarImage', { read: TemplateRef, static: true })
  avatarImage!: TemplateRef<any>;


  @ContentChild(UxgUserProfilePanelContentDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelContent: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelActionsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelActions: TemplateRef<any> | undefined;

  constructor(@Attribute('dense') public dense: any) {
  }

  ngOnInit() {}
}
