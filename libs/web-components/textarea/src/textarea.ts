import { customElement } from 'lit/decorators.js';
import { TextAreaBase } from '@material/mwc-textarea/mwc-textarea-base';

import { styles } from './styles.css';

@customElement('fds-textarea')
export class Textarea extends TextAreaBase {
  static styles = styles;

  constructor() {
    super();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textarea': Textarea;
  }
}
