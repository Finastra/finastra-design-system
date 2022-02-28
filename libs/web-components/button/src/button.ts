import '@material/mwc-button';
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
    return html`
      ${this.outlined || this.text
        ? html` <mwc-button
            label="${this.label}"
            icon="${this.icon}"
            ?outlined="${this.outlined}"
            ?text="${this.text}"
            ?dense="${this.dense}"
            ?disabled="${this.disabled}"
            ?fullwidth="${this.fullwidth}"
            ?trailingIcon="${this.trailingIcon}"
          >
            <slot></slot>
          </mwc-button>`
        : html` <mwc-button
            label="${this.label}"
            icon="${this.icon}"
            ?unelevated="${this.unelevated}"
            ?dense="${this.dense}"
            ?disabled="${this.disabled}"
            ?fullwidth="${this.fullwidth}"
            ?trailingIcon="${this.trailingIcon}"
          >
            <slot></slot>
          </mwc-button>`}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button': Button;
  }
}
