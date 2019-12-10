import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[uxgWizardPageDescription]' })
export class UxgWizardPageDescription {
  constructor(public pageDescriptionTemplateRef: TemplateRef<any>) {}
}
