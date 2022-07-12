import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('fds-card-subtitle')
export class CardSubTitle extends LitElement {
  static styles = css`
    :host {
      font: var(--fds-body-2);
      color: var(--fds-on-surface, #000000);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-subtitle': CardSubTitle;
  }
}
