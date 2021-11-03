import { customElement, LitElement, html, property } from 'lit-element';
import { styles } from './styles.css';

@customElement('fds-button')
export class FdsButton extends LitElement {
  static styles = styles;

  @property({ type: String })
  label = 'fds button';

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

  render() {
    if (this.outlined || this.text) {
      return html`<mwc-button
        label="${this.label}"
        icon="${this.icon}"
        ?outlined="${this.outlined}"
        ?text="${this.text}"
        ?dense="${this.dense}"
        ?disabled="${this.disabled}"
      ></mwc-button>`;
    }

    return html`<mwc-button
      label="${this.label}"
      icon="${this.icon}"
      ?unelevated="${this.unelevated}"
      ?dense="${this.dense}"
      ?disabled="${this.disabled}"
    ></mwc-button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-button': FdsButton;
  }
}
