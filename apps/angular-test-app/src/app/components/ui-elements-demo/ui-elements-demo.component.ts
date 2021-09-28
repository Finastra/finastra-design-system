import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ffdc-ui-elements-demo',
  templateUrl: './ui-elements-demo.component.html',
  styleUrls: ['./ui-elements-demo.component.scss']
})
export class UiElementsDemoComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  tabText: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus mauris orci, ac aliquam velit luctus vitae. Integer semper tortor tortor, in venenatis diam dignissim sed. Sed tempus lacus ac nisi lacinia vestibulum vitae in lectus.';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
  }
}
