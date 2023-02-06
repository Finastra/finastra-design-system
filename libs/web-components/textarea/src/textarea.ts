import { customElement } from 'lit/decorators.js';
import { BaseTextarea } from './base-textarea';
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
export class Textarea extends BaseTextarea {
  static styles = styles;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textarea': Textarea;
  }
}
