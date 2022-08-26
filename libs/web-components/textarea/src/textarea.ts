import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Textarea color.
 * @attr [label='textarea'] - Sets floating label value.
 * @attr [helper='helper'] - Helper text to display below the input. Display default only when focused.
 * @attr [required=false] - Displays error state if value is empty and input is blurred.
 * @attr [charCounter=false] - Requires `maxLength`to be set. Display character counter with max length. Textareas may display an "external" or "internal" charCounter. When `true`, textareas display an external character counter by default.
 * @attr [maxLength=0] - Maximum length input to accept.
 * @attr [disabled=false] - Whether or not the input should be disabled.
 */

@customElement('fds-textarea')
export class Textarea extends TextAreaBase {
  static styles = styles;

  constructor() {
    super();
    this.outlined = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textarea': Textarea;
  }
}
