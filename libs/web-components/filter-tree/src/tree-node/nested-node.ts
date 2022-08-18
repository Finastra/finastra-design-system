import { Checkbox } from '@finastra/checkbox/dist/src/checkbox';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './nested-node.css';


@customElement('fds-nested-node')
export class NestedNode extends LitElement {

  static styles = styles;

  @property({ type: Boolean }) selected = false;

  @property({ type: String }) label ="";
  
  render() {
    return html`
        <div style="display:flex;">
        <fds-checkbox @change=${this.onChange} ?checked=${this.selected}></fds-checkbox>
        <li>
          ${this.label}
        </li>
        </div>
    `;
  }

  protected async onChange(evt: Event) {
    const checkbox = evt.target as Checkbox;
    const changeFromProp = this.selected === checkbox.checked;

    if (!changeFromProp) {
      this.selected = checkbox.checked;
      this.dispatchSelectedEvent(this.selected);
      await this.updateComplete;
    }
    this.requestUpdate();
  }


  dispatchSelectedEvent(selected) {
    this.dispatchEvent(new CustomEvent('selected', {
      bubbles: true,
      cancelable: true,
        detail: {
          selected
        }
      }
      ));
  }

}



declare global {
  interface HTMLElementTagNameMap {
    'fds-nested-node': NestedNode;
  }
}
