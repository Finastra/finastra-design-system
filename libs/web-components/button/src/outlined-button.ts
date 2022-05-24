import { customElement } from 'lit/decorators.js';
import { BaseButton } from './base-button';
import { styles } from './outlined-styles.css';

@customElement('fds-outlined-button')
export class OutlinedButton extends BaseButton {
    static styles = styles;
    override outlined: boolean = true;  
}

declare global {
    interface HTMLElementTagNameMap {
      'fds-outlined-button': OutlinedButton;
    }
}
