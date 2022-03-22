import { customElement, property } from 'lit/decorators.js';
import { TextFieldBase } from '@material/mwc-textfield/mwc-textfield-base';

import { styles } from './styles.css';
import { html, TemplateResult } from 'lit';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Textfield color
 * @cssprop {color} [--fds-icon-color=#694ED6] - Icon color.
 * @cssprop {color} [--fds-icon-trailing-color=#694ED6] - Icon trailing color.
 * @attr [label='textfield'] - Sets floating label value.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [icon=''] - Leading icon to display in input. See mwc-icon.
 * @attr [iconTrailing=''] - Leading icon to display in input. See mwc-icon.
 * @attr [type=''] - A string specifying the type of control to render.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @slot actionButton - Slot to replace iconTrailing with an action button.
 */

@customElement('fds-textfield')
export class Textfield extends TextFieldBase {
  static styles = [styles];
  @property({ type: Boolean }) showActionButton = false;
  constructor() {
    super();
  }

  protected renderTrailingIcon(): TemplateResult | string {
    return this.showActionButton
      ? html`
      <slot name="actionButton"></slot>`
      : html`<i class="material-icons mdc-text-field__icon  mdc-text-field__icon--trailing">${this.iconTrailing}</i> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textfield': Textfield;
  }
}
