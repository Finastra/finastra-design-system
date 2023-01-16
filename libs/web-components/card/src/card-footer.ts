import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('fds-card-footer')
export class CardFooter extends LitElement {
  static styles = css`
    :host {
      display: block;
      margin: 0 -16px -16px -16px;
    }
  `;

  @property({ type: Boolean }) disabled = false;

  protected render() {
    return html`<slot></slot>`;
  }

  protected updated(changedProperties) {
    super.updated(changedProperties);
    for (const child of Array.from(this.children)) {
      if (this.disabled) {
        child.setAttribute('disabled', `${this.disabled}`);
      } else {
        child.removeAttribute('disabled');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-footer': CardFooter;
  }
}
