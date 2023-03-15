import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './card-subtitle-styles.css';

@customElement('fds-card-subtitle')
export class CardSubTitle extends LitElement {
  static styles = styles;

  @property({ type: Boolean }) disabled = false;

  render() {
    const classes = {
      'mdc-card-subtitle--disabled': this.disabled
    };

    return html`<span class="${classMap(classes)}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-subtitle': CardSubTitle;
  }
}
