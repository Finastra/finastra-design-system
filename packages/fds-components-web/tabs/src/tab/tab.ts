import { TabBase } from '@material/mwc-tab/mwc-tab-base';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './tab.css';

/**
 * @attr [label=''] - Text label to display in tab.
 * @attr [icon=''] - Material design icon name to display.
 * @attr [stacked='false'] - Stacks icon on top of label text.
 * @attr [classic='false'] - displays the fds tab.
 * @attr [segmented='false'] - displays a segmented tab, very similar to a button.
 */

@customElement('fds-tab')
export class Tab extends TabBase {
  static styles = styles;

  @property({ type: Boolean }) classic = false;
  @property({ type: Boolean }) segmented = false;
  @property({ type: Boolean }) stacked = false;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-tab': Tab;
  }
}
