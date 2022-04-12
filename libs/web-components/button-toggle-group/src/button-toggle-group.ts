import { customElement } from 'lit/decorators.js';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';

import { styles } from './styles.css';

@customElement('fds-button-toggle-group')
export class ButtonToggleGroup extends TabBarBase {
  static styles = styles;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle-group': ButtonToggleGroup;
  }
}
