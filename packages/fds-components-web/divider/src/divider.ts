import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './styles.css';
/**
 * @cssprop {color} [--fds-primary=#694ED6] - TextField color
 * @cssprop {text} [--fds-divider-inset-margin=80px] - Border radius of the outline.
 * @attr [vertical=false] - Displays the divider vertically instead of horizontically
 * @attr {"both"|"left"|"right"|"undefined"} [inset=undefined] - Type of inset
 */
@customElement('fds-divider')
export class Divider extends LitElement {
  static styles = styles;

  @property({ reflect: true, type: Boolean })
  vertical = false;

  @property({ reflect: true, type: String })
  inset: 'both' | 'left' | 'right' | undefined = undefined;
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-divider': Divider;
  }
}
