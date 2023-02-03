import { customElement } from 'lit/decorators.js';
import { BaseButton } from './base-button';
import { styles } from './text-styles.css';

@customElement('fds-text-button')
export class TextButton extends BaseButton {
  static styles = [BaseButton.styles, styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-text-button': TextButton;
  }
}
