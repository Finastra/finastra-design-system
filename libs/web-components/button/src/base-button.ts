import '@material/mwc-button';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class BaseButton extends LitElement {
  outlined: boolean = false;
  unelevated: boolean = true;
  text: boolean = false;
  
  /**
   * The label displayed inside the button
   */
  @property({ type: String })
  label = 'Button';

  /**
   * The name of the icon displayed before the label
   * Use trailingIcon to true to display this icon after the label
   */
  @property({ type: String })
  icon = '';

  /**
   * Use the smaller button size
   */
  @property({ type: Boolean })
  dense = false;

  /**
   * Is the button disabled or not
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Use the full width of its parent
   */
  @property({ type: Boolean })
  fullwidth = false;

  /**
   * Display the icon after the label instead of before
   */
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
