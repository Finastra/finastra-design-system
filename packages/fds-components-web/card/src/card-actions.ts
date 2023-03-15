import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export const enum Position {
  START = 'start',
  END = 'end'
}

@customElement('fds-card-actions')
export class CardActions extends LitElement {
  @property() align = Position.START;
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    :host div {
      display: flex;
      padding: var(--fds-spacing-2, 8px) 0;
    }

    .mdc-card__actions-align-start {
      justify-content: start;
    }

    .mdc-card__actions-align-end {
      justify-content: end;
    }
  `;

  protected render() {
    return html`<div class="${'mdc-card__actions-align-' + this.align}"><slot></slot></div>`;
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
    'fds-card-actions': CardActions;
  }
}
