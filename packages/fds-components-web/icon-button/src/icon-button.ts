import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @attr [icon='code'] - Icon used in the button.
 * @attr [disabled=false] - Make the button disabled.
 * @attr [primary=false] - Use the primary color.
 * @attr [secondary=false] - Use the secondary color.
 * @attr [dense=false] - Make the button smaller.
 */
@customElement('fds-icon-button')
export class IconButton extends IconButtonBase {
  static styles = styles;

  @property({ type: Boolean })
  dense = false;

  @property({ type: Boolean })
  primary = false;

  @property({ type: Boolean })
  secondary = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-button': IconButton;
  }
}
