import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';
/** 
* @attr [heading=''] - Title.
* @attr [open=false] - Opens.
* @attr [hideActions=false] - Hide actions.
*/
@customElement('fds-dialog')
export class Dialog extends DialogBase {
  static styles = styles;

  constructor() {
    super();
    this.open = false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-dialog': Dialog;
  }
}
