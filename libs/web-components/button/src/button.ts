import '@finastra/icon';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';


@customElement('fds-button')
export class Button extends LitElement {
  static styles = styles;

  @property({ type: String })
  label = 'Button';

  @property({ type: String })
  icon = '';

  @property({ type: Boolean })
  unelevated = true;

  @property({ type: Boolean })
  outlined = false;

  @property({ type: Boolean })
  text = false;

  @property({ type: Boolean })
  dense = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  fullwidth = false;

  @property({ type: Boolean })
  trailingIcon = false;

  render() {
    return html`<button
      ?disabled="${this.disabled}"
    >
      ${this.icon ? this.renderIcon() : ''}
      <span>${this.label}<span>
    </button>`
  }

  protected renderIcon() {
    return html`
    <fds-icon>
      ${this.icon}
    </fds-icon>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button': Button;
  }
}
