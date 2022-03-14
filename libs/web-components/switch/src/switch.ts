import { customElement } from 'lit/decorators.js';
import { SwitchBase } from '@material/mwc-switch/mwc-switch-base';

import { styles } from './styles.css';

@customElement('fds-switch')
export class Switch extends SwitchBase {
  static override styles = [styles];  
  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-switch': Switch;
  }
}
