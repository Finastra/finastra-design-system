import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles } from './styles.css';

 /**
 * @attr {boolean} dense - Set button in primary mode
 * @cssprop --fds-logo - String representing an image encoded in base64
 * @cssprop [--fds-logo-width=122px] - Width of the logo
 * @cssprop [--fds-logo-height=60px] - Height of the logo
 */
@customElement('fds-logo')
export class Logo extends LitElement {
  static styles = styles;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-logo': Logo;
  }
}
