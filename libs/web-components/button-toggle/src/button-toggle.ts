import { customElement } from 'lit/decorators.js';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';

import { styles } from './styles.css';

/**
 * @attr [label=''] - Text label to display in button toggle.
 * @attr [icon=''] - Material design icon name to display.
 * @attr {boolean} [disabled=false] - Display disabled button toggle.
 * @cssprop [--fds-toggle-min-width=30px] - tab min width
 * @cssprop [--fds-toggle-height=48px] - tab height.
 * @cssprop [--fds-toggle-width=100%] - tab width.
 * @cssprop [--fds-icon-width=24px] - icon width.
 * @cssprop [--fds-icon-height=24px] - icon height.
 * @cssprop [--fds-icon-size=24px] - icon size.
 **/

@customElement('fds-button-toggle')
export class ButtonToggle extends TabBase {
  static styles = styles;
  
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle': ButtonToggle;
  }
}
