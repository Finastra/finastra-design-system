import { customElement } from 'lit/decorators.js';
import { BaseButton } from './base-button';
import { styles } from './text-styles.css';

@customElement('fds-text-button')
export class TextButton extends BaseButton {
    static styles = styles;

    constructor() {
      super();
      this.text = true;
      this.unelevated = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'fds-text-button': TextButton;
    }
}
