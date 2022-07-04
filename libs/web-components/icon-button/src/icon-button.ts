import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

@customElement('fds-icon-button')
export class IconButton extends LitElement {
  static styles = styles;

  @property({ type: String })
  name = '';

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-button': IconButton;
  }
}
