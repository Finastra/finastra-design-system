import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './card-title-styles.css';

@customElement('fds-card-title')
export class CardTitle extends LitElement {
  static styles = styles;

  @property({ type: Boolean }) disabled = false;

  protected render() {
    const classes = {
      'mdc-card-title--disabled': this.disabled
    };

    return html`<span class="${classMap(classes)}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-title': CardTitle;
  }
}
