import { customElement } from 'lit/decorators.js';
import { BaseTextField } from './base-textfield';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - TextField color
 * @cssprop {color} [--fds-icon-color=#694ED6] - Icon color.
 * @cssprop {color} [--fds-icon-trailing-color=#694ED6] - Icon trailing color.
 * @cssprop {text} [--fds-text-field-radius=4px] - Border radius of the outline.
 * @attr [label='textfield'] - Sets floating label value.
 * @attr [placeholder='textfield'] - Sets placeholder value displayed when input is empty.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [icon=''] - Leading icon to display in input. See `fds-icon`.
 * @attr [iconTrailing=''] - Leading icon to display in input. See `fds-icon`.
 * @attr [type=''] - A string specifying the type of control to render.
 * @attr [validationMessage=''] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [dense=false] - Smaller text field size.
 * @attr [helper=''] - Helper text to display below the input.
 * @attr [labelInside=false] - Is the label included in the text field.
 * @attr [pattern=''] - A JavaScript regular expression. The textfield value must match this pattern.
 * @attr [showActionButton=false] - Enable the use of a the actionButton slot.
 * @slot actionButton - Slot to replace iconTrailing with an action button.
 */

@customElement('fds-textfield')
export class TextField extends BaseTextField {
  static override styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textfield': TextField;
  }
}
