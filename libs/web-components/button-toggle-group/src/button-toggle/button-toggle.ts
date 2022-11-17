import '@finastra/icon';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';


/**
 * @attr [label=''] - Text label to display in button toggle.
 * @attr [icon=''] - Material design icon name to display.
 * @attr {boolean} [disabled=false] - Disable button toggle.
 * @cssprop [--fds-button-toggle-min-width=30px] - Button toggle min width
 * @cssprop [--fds-button-toggle-height=48px] - Button toggle height.
 * @cssprop [--fds-button-toggle-width=100%] - Button toggle width.
 * @cssprop [--fds-icon-width=24px] - Icon width.
 * @cssprop [--fds-icon-height=24px] - Icon height.
 * @cssprop [--fds-icon-size=24px] - Icon size.
 **/

@customElement('fds-button-toggle')
export class ButtonToggle extends LitElement {
  static styles = styles;

  /**
   * The label displayed inside the button
   */
   @property({ type: String })
   label = 'Button';

  /**
   * Is the button disabled or not
   */
   @property({ type: Boolean })
   disabled = false;

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
    return html`<button
      aria-label="${this.label || this.icon}"
      ?disabled="${this.disabled}"
    >
      ${this.icon ? this.renderIcon() : ''}
      ${this.label}
    </button>`
  }

  protected renderIcon() {
    return html` <fds-icon dense> ${this.icon} </fds-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button-toggle': ButtonToggle;
  }
}
