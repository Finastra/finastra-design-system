import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

@customElement('fds-icon-button')
export class IconButton extends IconButtonBase {
  static override styles = [styles];

  /**
   * Use the smaller button size
   */
  @property({ type: Boolean })
  dense = false;

  /**
   * Use the primary color
   */
  @property({ type: Boolean })
  primary = false;

  /**
   * Use the secondary color
   */
  @property({ type: Boolean })
  secondary = false;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-button': IconButton;
  }
}
