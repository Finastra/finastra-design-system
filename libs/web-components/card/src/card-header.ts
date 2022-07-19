
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

  @property({ type: Boolean }) disabled = false;

  protected render() {
    return html`<slot></slot>`;
  }

  protected updated(changedProperties) {
    super.updated(changedProperties);
    for (const child of Array.from(this.children)) {
      if (this.disabled) {
        child.setAttribute("disabled", `${this.disabled}`);
        if(child.children.length > 1) {
          for (const subchild of Array.from(child.children)) {
            subchild.setAttribute("disabled", `${this.disabled}`);
          }
        }
      } else {
        child.removeAttribute('disabled');
        if(child.children.length > 1) {
          for (const subchild of Array.from(child.children)) {
            subchild.removeAttribute("disabled");
          }
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-header': CardHeader;
  }
}
