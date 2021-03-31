import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarModule } from '@finastra/angular-components/avatar';

import { UxgUserProfilePanelComponent } from './user-profile-panel.component';
import { UxgUserProfilePanelActionsDirective } from './user-profile-panel-actions.directive';
import { UxgUserProfilePanelContentDirective } from './user-profile-panel-content.directive';
import { UxgUserProfilePanelDetailsDirective } from './user-profile-panel-details.directive';
import { UxgUserProfileMenuComponent } from './user-profile-menu.component';

@NgModule({
  imports: [CommonModule, AvatarModule, MatDividerModule, MatMenuModule],
  exports: [
    UxgUserProfileMenuComponent,
    UxgUserProfilePanelComponent,
    UxgUserProfilePanelActionsDirective,
    UxgUserProfilePanelContentDirective,
    UxgUserProfilePanelDetailsDirective
  ],
  declarations: [
    UxgUserProfilePanelComponent,
    UxgUserProfileMenuComponent,
    UxgUserProfilePanelActionsDirective,
    UxgUserProfilePanelContentDirective,
    UxgUserProfilePanelDetailsDirective
  ]
})
export class UxgUserProfileMenuModule {}
