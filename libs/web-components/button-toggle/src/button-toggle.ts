import { customElement } from 'lit/decorators.js';
import { TabBase } from '@material/mwc-tab/mwc-tab-base';

import { styles } from './styles.css';

/**
 * @attr [label=''] - Text label to display in button toggle.
 * @attr [icon=''] - Material design icon name to display.
 * @attr {boolean} [disabled=false] - Disable button toggle.
 * @cssprop [--fds-button-toggle-min-width=30px] - Button toggle min width
 * @cssprop [--fds-button-toggle-height=48px] - Button toggle height.
 * @cssprop [--fds-button-toggle-width=100%] - Button toggle width.
 * @cssprop [--fds-icon-width=24px] - Icon width.
 * @cssprop [--fds-icon-height=24px] - Icon height.
 * @cssprop [--fds-icon-size=24px] - Icon size.
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
