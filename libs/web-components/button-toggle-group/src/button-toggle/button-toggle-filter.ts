import { customElement } from 'lit/decorators.js';

import { styles } from './filter-styles.css';
import { ButtonToggle } from './button-toggle';

@customElement('fds-button-toggle-filter')
export class ButtonTogglefilter extends ButtonToggle {
  static styles = styles;
  
  constructor() {
    super();
    this.stacked=true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle-filter': ButtonToggle;
  }
}
