import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('fds-tab-item')
export class TabItem extends LitElement {
  @property({ type: String })
  label = '';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-tab-item': TabItem;
  }
}
