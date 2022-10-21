import { customElement } from 'lit/decorators.js';
import { BaseButton } from './base-button';
import { styles } from './outlined-styles.css';

@customElement('fds-outlined-button')
export class OutlinedButton extends BaseButton {
    static styles = [BaseButton.styles, styles];

    constructor() {
      super();
      this.outlined = true;
      this.unelevated = false;
    }
}

declare global {
    interface HTMLElementTagNameMap {
      'fds-outlined-button': OutlinedButton;
    }
}
