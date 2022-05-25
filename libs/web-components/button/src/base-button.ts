import '@material/mwc-button';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class BaseButton extends LitElement {
  outlined: boolean = false;
  unelevated: boolean = true;
  text: boolean = false;
  
  @property({ type: String })
  label = 'Button';

  @property({ type: String })
  icon = '';

  @property({ type: Boolean })
  dense = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  fullwidth = false;

  @property({ type: Boolean })
  trailingIcon = false;

  render() {
    return html`<mwc-button
            label="${this.label}"
            icon="${this.icon}"
            ?unelevated="${this.unelevated}"
            ?outlined="${this.outlined}"
            ?text="${this.text}"
            ?dense="${this.dense}"
            ?disabled="${this.disabled}"
            ?fullwidth="${this.fullwidth}"
            ?trailingIcon="${this.trailingIcon}"
          >
            <slot></slot>
          </mwc-button>`}
}
