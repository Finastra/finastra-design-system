import { customElement } from 'lit/decorators.js';
import { OutlinedButton } from './outlined-button';
import { styles } from './text-styles.css';

@customElement('fds-text-button')
export class TextButton extends OutlinedButton {
    static styles = [OutlinedButton.styles, styles];

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
