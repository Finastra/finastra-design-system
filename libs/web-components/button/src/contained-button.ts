import { customElement } from 'lit/decorators.js';
import { BaseButton } from './base-button';
import { styles } from './contained-styles.css';

@customElement('fds-button')
export class ContainedButton extends BaseButton {
  static styles = [BaseButton.styles, styles];

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button': ContainedButton;
  }
}
