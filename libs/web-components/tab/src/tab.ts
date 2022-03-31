import { customElement } from 'lit/decorators.js';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';

import { styles } from './styles.css';

@customElement('fds-tab')
export class Tab extends TabBase {
  static styles = styles;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-tab': Tab;
  }
}
