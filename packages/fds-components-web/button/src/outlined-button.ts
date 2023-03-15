import { customElement } from 'lit/decorators.js';
import { styles } from './outlined-styles.css';
import { TextButton } from './text-button';

@customElement('fds-outlined-button')
export class OutlinedButton extends TextButton {
  static styles = [TextButton.styles, styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-outlined-button': OutlinedButton;
  }
}
