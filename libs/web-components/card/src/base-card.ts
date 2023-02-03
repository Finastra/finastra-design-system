import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './base-styles.css';

/**
 * @attr {boolean} [outlined=false] - Change the card style to outlined, default style is elevated.
 * @attr {boolean} [selectable=false] - Change the card style to an action card.
 * @attr {boolean} [disabled=false] - Disabled style of the card.
 */

export class BaseCard extends LitElement {
  static styles = styles;

  @property({ type: Boolean }) outlined = false;
  @property({ type: Boolean }) selectable = false;
  @property({ type: Boolean }) disabled = false;

  protected render(): TemplateResult {
    if (this.disabled && this.selectable) {
      this.selectable = false;
    }

    const classes = {
      'mdc-card--outlined': this.outlined,
      'mdc-card--selectable': this.selectable,
      'mdc-card--disabled': this.disabled
    };
    return html`<div class="mdc-card ${classMap(classes)}">${this.renderCardContent()}</div>`;
  }

  protected renderCardContent(): TemplateResult {
    return html``;
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
    'fds-base-card': BaseCard;
  }
}
