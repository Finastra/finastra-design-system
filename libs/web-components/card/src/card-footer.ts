import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('fds-card-footer')
export class CardFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0 -16px -16px -16px;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-footer': CardFooter;
  }
}
