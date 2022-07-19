import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('fds-card-content')
export class CardContent extends LitElement {
  static styles = css`
    :host {
      font: var(--fds-body-2);
      color: var(--fds-on-surface-medium, #00000036);
      margin-bottom: var(--fds-spacing-3, 16px);
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
        child.setAttribute("disabled", `${this.disabled}`);
      } else {
        child.removeAttribute('disabled');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-content': CardContent;
  }
}
