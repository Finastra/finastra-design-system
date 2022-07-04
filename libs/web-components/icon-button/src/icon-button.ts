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
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-button': IconButton;
  }
}
