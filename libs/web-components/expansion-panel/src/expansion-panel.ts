import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './expansion-panel.css';

@customElement('fds-expansion-panel')
export class ExpansionPanel extends LitElement {
  static styles = styles;

  @property({ type: String })
  /**
   * The display mode used for all expansion panel items.
   */
  displayMode: 'default' | 'flat' = 'default';

  @property({ type: Boolean })
  /**
   * Whether the expansion indicator should be hidden.
   */  
  hideToggleIcon = false;

  @property({ type: Boolean })
  /**
   * Whether the expansion should allow multiple expanded items
   */    
  multi = false;

  @property({ type: String })
  /**
   * The position of toggle indicator for all expansion items
  */    
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
