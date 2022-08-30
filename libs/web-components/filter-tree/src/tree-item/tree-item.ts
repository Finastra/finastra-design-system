import "@finastra/checkbox";
import { observer } from '@material/mwc-base/observer.js';
import "@material/mwc-formfield";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type SelectionSource = 'interaction' | 'property';
export interface RequestSelectedDetail {
  selected: boolean;
  source: SelectionSource;
}

@customElement('fds-tree-item')
export class TreeItem extends LitElement {

  @property({ type: String }) label = '';
  @property({ type: Boolean, reflect: true }) selected = false;

  @property({ type: Boolean }) indeterminate = false;

  @observer(function (this: TreeItem, value: boolean) {
    if (value) {
      this.removeAttribute('aria-checked');
      this.removeAttribute('fds-tree-item');
      this.selected = false;
      this.tabIndex = -1;
    } else {
      this.setAttribute('fds-tree-item', '');
    }
  })
  noninteractive = false;

  render() {
    return html`
    <mwc-formfield label=${this.label}>
      <fds-checkbox @change=${this.onChange} ?checked=${this.selected} ?indeterminate=${this.indeterminate}></fds-checkbox>
    </mwc-formfield>`
  }

  onChange(evt) {
    const checkbox = evt.target;
    const changeFromProp = this.selected === checkbox.checked;
    if (!changeFromProp) {
      this.selected = checkbox.checked;
      this.fireRequestSelected(!this.selected, 'interaction');
    }
  }

  protected fireRequestSelected(selected: boolean, source: SelectionSource) {
    if (this.noninteractive) {
      return;
    }
    const customEv = new CustomEvent<RequestSelectedDetail>(
      'request-selected',
      { bubbles: true, composed: true, detail: { source, selected } });

    this.dispatchEvent(customEv);
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'fds-tree-item': TreeItem;
  }
}



