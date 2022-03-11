import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';

import "@material/mwc-checkbox";

import { ifDefined } from 'lit/directives/if-defined.js';
/**
 * @cssprop {color} [--fds-primary=#694ED6] - Color of the start of the gradient
 */
@customElement('fds-checkbox')
export class Checkbox extends LitElement {
  static styles = styles;

  /**
   * Whether the checkbox is checked.
   */
  @property({ type: Boolean })
  checked = false;

  /**
   * It is used on the parent to indicate that some but not all of its children are checked.
   */
  @property({ type: Boolean })
  indeterminate = false;

  /**
   * When true, the checkbox cannot be interacted with
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * aria label 
   */
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel = '';

  render() {
    return html` <mwc-checkbox
      ?checked="${this.checked}"
      ?indeterminate="${this.indeterminate}"
      ?disabled="${this.disabled}"
      aria-label="${ifDefined(this.ariaLabel)}"
    ></mwc-checkbox>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-checkbox': Checkbox;
  }
}
