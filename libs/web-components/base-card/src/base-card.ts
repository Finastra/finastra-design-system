import { html, LitElement, TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

export class BaseCard extends LitElement {
  static styles = styles;
  /**
   * Line border
   */
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
      'mdc-card--disabled': this.disabled,
     };
    return html`<div class="mdc-card ${classMap(classes)}">${this.renderCardContent()}</div>`;
  }

  protected renderCardContent(): TemplateResult {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-base-card': BaseCard;
  }
}
