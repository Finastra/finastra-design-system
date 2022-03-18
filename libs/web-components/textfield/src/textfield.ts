import { customElement } from 'lit/decorators.js';
import {TextFieldBase} from '@material/mwc-textfield/mwc-textfield-base';

import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Textarea color.
 * @attr [label='textfield'] - Sets floating label value.
 * @attr [icon=''] - Leading icon to display in input. See mwc-icon.
 * @attr [type=text] - A string specifying the type of control to render.
 * @attr [validationMessage='error'] - Message to show in the error color when the textfield is invalid. (Helper text will not be visible)
 * @attr [disabled=false] - Whether or not the input should be disabled.
 * @attr [outlined=false] - Whether or not to show the material outlined variant.
 */

@customElement('fds-textfield')
export class Textfield extends TextFieldBase {
  static styles = styles;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textfield': Textfield;
  }
}
