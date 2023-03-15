import '@finastra/icon';
import { CSSResultGroup, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styles } from './base-styles.css';

export class BaseButton extends LitElement {
  static styles: CSSResultGroup = [styles];

  /**
   * The label displayed inside the button
   */
  @property({ type: String })
  label = 'Button';

  /**
   * The name of the icon displayed before the label
   * Use trailingIcon to true to display this icon after the label
   */
  @property({ type: String })
  icon = '';

  /**
   * Use the smaller button size
   */
  @property({ type: Boolean })
  dense = false;

  /**
   * Use the larger button size
   */
  @property({ type: Boolean })
  large = false;

  /**
   * Is the button disabled or not
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Use the full width of its parent
   */
  @property({ type: Boolean })
  fullwidth = false;

  /**
   * Display the icon after the label instead of before
   */
  @property({ type: Boolean })
  trailingIcon = false;

  @property({ type: String })
  type: 'button' | 'reset' | 'submit' = 'button';

  render() {
    return html`<button aria-label="${this.label || this.icon}" ?disabled="${this.disabled}">
      ${this.icon && !this.trailingIcon ? this.renderIcon() : ''} <span class="fds-button__label">${this.label}</span>
      <slot></slot>
      ${this.icon && this.trailingIcon ? this.renderIcon() : ''}
    </button>`;
  }

  protected renderIcon() {
    return html` <fds-icon> ${this.icon} </fds-icon>`;
  }
}
