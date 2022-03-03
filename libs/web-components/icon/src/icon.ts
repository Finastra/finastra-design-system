import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
@cssprop {color} [--fds-icon-color] - Color of the start of the gradient
 * @cssprop [--fds-icon-size=24px]
 */
@customElement('fds-icon')
export class Icon extends LitElement {
  static styles = styles;

  render() {
    return html`<span class="material-icons"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon': Icon;
  }
}
