import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UxgUserProfilePanelComponent } from './user-profile-panel.component';
import { AvatarModule } from '@ffdc/uxg-angular-components/avatar';
import { UxgUserProfilePanelActionsDirective } from './user-profile-panel-actions.directive';
import { UxgUserProfilePanelContentDirective } from './user-profile-panel-content.directive';
import { MatDividerModule } from '@angular/material/divider';
import { UxgUserProfileMenuComponent } from './user-profile-menu.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [CommonModule, AvatarModule, MatDividerModule, MatMenuModule],
  exports: [
    UxgUserProfileMenuComponent,
    UxgUserProfilePanelComponent,
    UxgUserProfilePanelActionsDirective,
    UxgUserProfilePanelContentDirective,
  ],
  declarations: [
    UxgUserProfilePanelComponent,
    UxgUserProfileMenuComponent,
    UxgUserProfilePanelActionsDirective,
    UxgUserProfilePanelContentDirective,
  ],
})
export class UxgUserProfileMenuModule {}
