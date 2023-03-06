import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

@customElement('fds-{{ name }}')
export class {{ sentenceCase name }} extends LitElement {
  static styles = styles;

  @property({ type: String })
  name = ''


  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-{{ name }}': {{ name }};
  }
}