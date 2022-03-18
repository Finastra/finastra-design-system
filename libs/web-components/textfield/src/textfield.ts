import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

@customElement('fds-textfield')
export class Textfield extends LitElement {
  static styles = styles;

  @property({ type: String })
  name = '';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-textfield': Textfield;
  }
}
