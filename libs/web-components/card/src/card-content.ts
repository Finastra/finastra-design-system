import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './card-content-styles.css';

@customElement('fds-card-content')
export class CardContent extends LitElement {
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
