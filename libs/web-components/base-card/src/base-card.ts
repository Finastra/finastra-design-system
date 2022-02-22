import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './styles.css';

@customElement('fds-base-card')
export class BaseCard extends LitElement {
  static styles = styles;
  /**
   * Line border
   */
  @property({ type: Boolean }) outlined = false;

  protected render(): TemplateResult {
    const classes = { 'mdc-card--outlined': this.outlined };
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
