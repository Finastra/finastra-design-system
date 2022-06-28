import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './expansion-panel.css';

@customElement('fds-expansion-panel')
export class ExpansionPanel extends LitElement {
  static styles = styles;

  @property({ type: String })
  displayMode: 'default' | 'flat' = 'default';

  @property({ type: Boolean })
  hideToggleIcon = false;

  @property({ type: Boolean })
  multi = false;

  @property({ type: String })
  toggleIconPosition: 'before' | 'after' = 'after';


  getExpansionItems() {
    const slotSelector = 'slot:not([name]';
    const slotEl = this.renderRoot?.querySelector<HTMLSlotElement>(slotSelector);
    return slotEl?.assignedNodes().filter(node => node instanceof LitElement) ?? [];
  }

  closeOtherExpansionItems(current: Node) {
    if (this.multi) return
    const nodes = this.getExpansionItems()

    nodes.forEach(node => {
      if (node === current) return
      node['expanded'] = false
    })  
  }

  render() {
    const nodes = this.getExpansionItems()
    nodes.forEach(node => {
      if (node instanceof LitElement) {
        node.requestUpdate()
      }      
    })
    return html`<slot></slot>`;
  } 
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-expansion-panel': ExpansionPanel;
  }
}
