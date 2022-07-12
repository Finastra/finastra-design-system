
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('fds-card-header')
export class CardHeader extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      margin-bottom: var(--fds-spacing-4, 32px);
    }

    slot::slotted(div:first-child) {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: cover;
    }

    slot::slotted(div:last-child) {
      display: flex;
      flex-direction: column;
      margin: var(--fds-spacing-0, 0) var(--fds-spacing-3, 16px);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-header': CardHeader;
  }
}
