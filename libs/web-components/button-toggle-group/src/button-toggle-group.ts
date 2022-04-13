import { customElement } from 'lit/decorators.js';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';

import { styles } from './styles.css';

/**
 * @cssprop [--fds-toggle-min-width=30px] - tab min width
 * @cssprop [--fds-toggle-height=48px] - tab height.
 * @cssprop [--fds-toggle-width=100%] - tab width.
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
