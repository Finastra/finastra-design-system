import '@finastra/icon';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

@customElement('fds-button-toggle')
export class ButtonToggle extends LitElement {
  static styles = styles;
  static override shadowRootOptions: ShadowRootInit = { mode: 'open', delegatesFocus: true };

  /**
   * The label displayed inside the button
   */
  @property({ type: String })
  label = '';

  /**
   * The value associated to this button
   */
  @property({ type: String })
  value = '';

  /**
   * Is the button dense or not
   */
  @property({ type: Boolean })
  dense = false;

  /**
   * The name of the icon displayed before the label
   * Use trailingIcon to true to display this icon after the label
   */
  @property({ type: String })
  icon = '';

  constructor() {
    super();
  }

  render() {
    return html`<button role="radio" aria-label="${this.label || this.icon}" ?dense="${this.dense}" @click="${this._handleClick}">
      ${this.icon ? this.renderIcon() : ''} ${this.label ? this.renderLabel() : ''}
    </button>`;
  }

  protected renderIcon() {
    return html` <fds-icon> ${this.icon} </fds-icon>`;
  }

  protected renderLabel() {
    return html` <span> ${this.label} </span>`;
  }

  private _handleClick() {
    this.dispatchEvent(new CustomEvent('FDSToggle:click', { bubbles: true, composed: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle': ButtonToggle;
  }
}
