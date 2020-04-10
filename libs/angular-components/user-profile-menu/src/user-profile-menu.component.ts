import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  ContentChild,
  TemplateRef,
} from '@angular/core';
import { UserProfile } from './user-profile';
import { UxgUserProfilePanelActionsDirective } from './user-profile-panel-actions.directive';
import { UxgUserProfilePanelContentDirective } from './user-profile-panel-content.directive';

@Component({
  selector: 'uxg-user-profile-menu',
  templateUrl: './user-profile-menu.component.html',
  styleUrls: ['./user-profile-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'uxg-user-profile-menu',
  },
})
export class UxgUserProfileMenuComponent implements OnInit {
  @Input() user!: UserProfile;

  @ContentChild(UxgUserProfilePanelContentDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelContent: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelActionsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelActions: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit() {}
}
