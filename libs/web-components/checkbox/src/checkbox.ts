import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

import '@material/mwc-checkbox';
import { CheckboxBase } from '@material/mwc-checkbox/mwc-checkbox-base';

/**
 * @cssprop {color} [--fds-primary=#694ED6] - Color of the start of the gradient
 */

@customElement('fds-checkbox')
export class Checkbox extends CheckboxBase {
  static styles = styles;

  @property({ type: String })
  property = '';

  constructor() {
    super();
  }

  render() {
    return html` <mwc-checkbox
    ?checked='${this.checked}'
    ?indeterminate='${this.indeterminate}'
    ?disabled='${this.disabled}'
    ></mwc-checkbox>`;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'fds-checkbox': Checkbox;
  }
}
