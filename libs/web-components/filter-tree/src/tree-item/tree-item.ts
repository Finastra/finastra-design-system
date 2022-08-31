import "@finastra/checkbox";
import "@finastra/icon-button";
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
  @property({ type: Boolean }) indeterminate = false;

  @property({ type: Boolean }) expanded = false;
  @property({ type: Boolean }) hideExpandIcon = false;

  @property({ type: Boolean, reflect: true }) selected = false;

  protected expandIcon = 'expand_more';


  render() {
    return html`
    <mwc-formfield label=${this.label}>
      <fds-checkbox @change=${this.onChange} ?checked=${this.selected} ?indeterminate=${this.indeterminate}></fds-checkbox>
    </mwc-formfield>
    ${this.hideExpandIcon ? 
      html`<fds-icon-button icon=${this.expandIcon} @click="${this.toggleList}"></fds-icon-button>` : ''}
    `
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
    const customEv = new CustomEvent<RequestSelectedDetail>(
      'request-selected',
      { bubbles: true, composed: true, detail: { source, selected } });

    this.dispatchEvent(customEv);
  }

  toggleList() {
    this.expanded= !this.expanded;

    const customEv = new CustomEvent(
      'expand-click',
      { bubbles: true, composed: true, detail: this.expanded});

    this.dispatchEvent(customEv);
  }

  get _expandIcon() {
    return this.expandIcon;
  }

  updated(changedProperties) {
    this.expandIcon = this.expanded ? 'expand_more' : 'expand_less';
    super.update(changedProperties);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-tree-item': TreeItem;
  }
}



