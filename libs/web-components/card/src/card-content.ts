import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('fds-card-content')
export class CardContent extends LitElement {
  static styles = css`
    :host {
      font: var(--fds-body-2);
      color: var(--fds-on-surface-medium, #00000036);
      margin-bottom: var(--fds-spacing-3, 16px);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-content': CardContent;
  }
}
