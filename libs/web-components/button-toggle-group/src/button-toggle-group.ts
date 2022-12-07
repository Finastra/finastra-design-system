import { customElement } from 'lit/decorators.js';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';

import { styles } from './styles.css';

/**
 * @attr {boolean} [dense=false] - Make the button toggle smaller.
 * @cssprop [--fds-button-toggle-min-width=30px] - Button toggle min width
 * @cssprop [--fds-button-toggle-height=48px] - Button toggle height.
 * @cssprop [--fds-button-toggle-width=100%] - Button toggle width.
 * @cssprop [--fds-icon-width=24px] - icon width.
 * @cssprop [--fds-icon-height=24px] - icon height.
 * @cssprop [--fds-icon-size=24px] - icon size.
 **/

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
