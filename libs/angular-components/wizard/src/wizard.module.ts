import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatIconModule } from '@angular/material';
import { UxgWizardButton } from './wizard-button/wizard-button.component';
import { UxgWizardPageDescription } from './wizard-page/wizard-page-description.directive';
import { UxgWizardPageTitle } from './wizard-page/wizard-page-title.directive';
import { UxgWizardPage } from './wizard-page/wizard-page.component';
import { UxgWizard, UxgWizardTitle } from './wizard.component';

@NgModule({
  imports: [CommonModule, FlexLayoutModule, MatIconModule, MatButtonModule, MatDividerModule],
  declarations: [
    UxgWizard,
    UxgWizardTitle,
    UxgWizardPage,
    UxgWizardPageTitle,
    UxgWizardPageDescription,
    UxgWizardButton
  ],
  exports: [UxgWizard, UxgWizardTitle, UxgWizardPage, UxgWizardPageTitle, UxgWizardPageDescription, UxgWizardButton]
})
export class WizardModule {}
