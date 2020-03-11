import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { UxgWizardButtonComponent } from './wizard-button/wizard-button.component';
import { UxgWizardPageDescriptionComponent } from './wizard-page/wizard-page-description.directive';
import { UxgWizardPageTitleComponent } from './wizard-page/wizard-page-title.directive';
import { UxgWizardPageComponent } from './wizard-page/wizard-page.component';
import { UxgWizardComponent } from './wizard.component';
import { UxgWizardTitleComponent } from './wizard-title.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatButtonModule, MatDividerModule],
  declarations: [
    UxgWizardComponent,
    UxgWizardTitleComponent,
    UxgWizardPageComponent,
    UxgWizardPageTitleComponent,
    UxgWizardPageDescriptionComponent,
    UxgWizardButtonComponent
  ],
  exports: [
    UxgWizardComponent,
    UxgWizardTitleComponent,
    UxgWizardPageComponent,
    UxgWizardPageTitleComponent,
    UxgWizardPageDescriptionComponent,
    UxgWizardButtonComponent
  ]
})
export class WizardModule {}
