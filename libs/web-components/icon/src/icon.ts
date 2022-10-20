import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';

/**
 * @attr {boolean} [dense=false] - Dense size of the icon `18px`.
 * @attr {boolean} [large=false] - Large size of the icon `36px`.
 * @attr {boolean} [extra_large=false] - Dense size of the icon `48px`.
 * @attr {boolean} [primary=false] - Use primary color.
 * @attr {boolean} [secondary=false] - Use secondary color.
 * @attr {boolean} [success=false] - Use success color.
 * @attr {boolean} [error=false] - Use error color.
 * @attr {boolean} [gradient=false] - Use gradient color.
 * @slot default - The name of the icon to display (e.g. credit_card). See Material Icons for an index of all available icons.
 * @cssprop [--fds-icon-size=24px] - Size of the icon, default `24px`.
 **/

@customElement('fds-icon')
export class Icon extends LitElement {
  static override styles = [styles];

  @property({ type: Boolean })
  dense = false;

  @property({ type: Boolean })
  large = false;

  @property({ type: Boolean })
  extra_large = false;

  @property({ type: Boolean })
  primary = false;

  @property({ type: Boolean })
  secondary = false;

  @property({ type: Boolean })
  success = false;

  @property({ type: Boolean })
  error = false;

  @property({ type: Boolean })
  warning = false;

  @property({ type: Boolean })
  info = false;

  @property({ type: Boolean })
  gradient = false;

  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`<span><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon': Icon;
  }
}
