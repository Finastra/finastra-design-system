import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';


@customElement('fds-badge-container')
export class badgeContainer extends LitElement {
  static styles = styles;

  render() {
    return html`<div class="container">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-badge-container': badgeContainer;
  }
}
