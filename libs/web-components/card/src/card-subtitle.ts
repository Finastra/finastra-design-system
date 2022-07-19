import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('fds-card-subtitle')
export class CardSubTitle extends LitElement {
  static styles = css`
    :host {
      font: var(--fds-body-2);
      color: var(--fds-on-surface, #000000);
    }

    .mdc-card-subtitle--disabled {
      color: var(--fds-on-surface-disabled, #0000001D);
    }
  `;

  @property({ type: Boolean }) disabled = false;

  render() {
    const classes = {
      'mdc-card-subtitle--disabled': this.disabled,
    };

    return html`<span class="${classMap(classes)}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-subtitle': CardSubTitle;
  }
}
