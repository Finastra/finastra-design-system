import { customElement,property } from 'lit/decorators.js';
import { TabBarBase } from '@material/mwc-tab-bar/mwc-tab-bar-base';

import { styles } from './styles.css';

/**
 * @cssprop {color} [ --fds-tab-min-width=90] - tab min width
 * @cssprop {color} [--fds-tab-height=48px] - tab height.
 **/

@customElement('fds-button-toggle-group')
export class ButtonToggleGroup extends TabBarBase {
  static styles = styles;

  @property({ type: Boolean }) rounded = false;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle-group': ButtonToggleGroup;
  }
}
