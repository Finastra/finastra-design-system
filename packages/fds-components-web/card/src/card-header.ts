import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './card-header-styles.css';

@customElement('fds-card-header')
export class CardHeader extends LitElement {
  static styles = styles;

  @property({ type: Boolean }) disabled = false;

  protected render() {
    return html`<slot></slot>`;
  }

  protected updated(changedProperties) {
    super.updated(changedProperties);
    for (const child of Array.from(this.children)) {
      if (this.disabled) {
        child.setAttribute('disabled', `${this.disabled}`);
        if (child.children.length > 1) {
          for (const subchild of Array.from(child.children)) {
            subchild.setAttribute('disabled', `${this.disabled}`);
          }
        }
      } else {
        child.removeAttribute('disabled');
        if (child.children.length > 1) {
          for (const subchild of Array.from(child.children)) {
            subchild.removeAttribute('disabled');
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
