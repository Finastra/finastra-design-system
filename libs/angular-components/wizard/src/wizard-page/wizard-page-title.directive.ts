import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[uxgWizardPageTitle]' })
export class UxgWizardPageTitle {
  constructor(public pageTitleTemplateRef: TemplateRef<any>) {}
}
