import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[uxgWizardPageTitle]' })
export class UxgWizardPageTitleComponent {
  constructor(public pageTitleTemplateRef: TemplateRef<any>) {}
}
