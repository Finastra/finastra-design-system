import { IconButtonBase } from '@material/mwc-icon-button/mwc-icon-button-base.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
  * @cssprop {color} [--fds-icon-button-bg=rgba(105, 78, 214, 0.08);] - Checkbox color
  * @cssprop {color} [--fds-icon-button-text=#694ED6] - Checkbox color
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

  @property({ type: Boolean })
  bg = false;

}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-button': IconButton;
  }
}
