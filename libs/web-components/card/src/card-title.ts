import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('fds-card-title')
export class CardTitle extends LitElement {
  static styles = css`
    :host {
      font: var(--fds-headline-6);
      color: var(--fds-on-surface, #000000);
      margin: var(--fds-spacing-1, 4px) var(--fds-spacing-0, 0);
    }
  `;

  protected render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-title': CardTitle;
  }
}
