import { customElement } from 'lit/decorators.js';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';

import { styles } from './styles.css';

 /**
 * @attr [activeIndex='0'] - Index of tab that is active.
 * @attr [label=''] - Text label to display in tab.
 * @attr [icon=''] - Material design icon name to display.
 */

@customElement('fds-tab-bar')
export class TabBar extends TabBarBase {
  static styles = styles;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-tab-bar': TabBar;
  }
}
