import { customElement, property } from 'lit/decorators.js';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';

import { styles } from './styles.css';

@customElement('fds-button-toggle')
export class ButtonToggle extends TabBase {
  static styles = styles;
  @property({ type: Boolean }) filter = false;
  
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle': ButtonToggle;
  }
}
