import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('fds-card-title')
export class CardTitle extends LitElement {
  static styles = css`
    :host {
      font: var(--fds-headline-6);
      color: var(--fds-on-surface, #000000);
      margin: var(--fds-spacing-1, 4px) var(--fds-spacing-0, 0);
    }

    .mdc-card-title--disabled {
      color: var(--fds-on-surface-disabled, #0000001D);
    }
  `;

  @property({ type: Boolean }) disabled = false;

  protected render() {
    const classes = {
      'mdc-card-title--disabled': this.disabled,
    };

    return html`<span class="${classMap(classes)}"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-card-title': CardTitle;
  }
}
