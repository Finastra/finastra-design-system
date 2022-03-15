import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @cssprop {color} [--fds-primary=#917EE0] - FDS Primary color
 */
@customElement('fds-radio')
export class Radio extends RadioBase {
  static override styles = [styles];
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-radio': Radio;
  }
}

