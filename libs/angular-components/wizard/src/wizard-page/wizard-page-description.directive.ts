import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[uxgWizardPageDescription]' })
export class UxgWizardPageDescriptionComponent {
  constructor(public pageDescriptionTemplateRef: TemplateRef<any>) {}
}
