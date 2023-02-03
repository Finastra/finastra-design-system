import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styles } from './expansion-panel.css';

/**
 * @cssprop {text} [--fds-expansion-panel-item-header=48px] - Header height.
 * @cssprop {text} [--fds-expansion-panel-item-header-expanded=64px] - Expanded header height.
 * @attr {"default"|"flat"} [displayMode=default] - The display mode used for all expansion panel items.
 * @attr {"before"|"after"} [toggleIconPosition=after] - The position of toggle indicator for all expansion items
 * @slot title - Content to display in the title.
 * @slot description - Content to display in the description.
 * @slot default - Content to display in the body.
 */
@customElement('fds-expansion-panel')
export class ExpansionPanel extends LitElement {
  static styles = styles;

  /**
   * The display mode used for all expansion panel items.
   */
  @property({ type: String })
  displayMode: 'default' | 'flat' = 'default';

  /**
   * Whether the expansion indicator should be hidden.
   */
  @property({ type: Boolean })
  hideToggleIcon = false;

  /**
   * Whether the expansion should allow multiple expanded items
   */
  @property({ type: Boolean })
  multi = false;

  /**
   * The position of toggle indicator for all expansion items
   */
  @property({ type: String })
  toggleIconPosition: 'before' | 'after' = 'after';

  getExpansionItems() {
    const slotSelector = 'slot:not([name]';
    const slotEl = this.renderRoot?.querySelector<HTMLSlotElement>(slotSelector);
    return slotEl?.assignedNodes().filter((node) => node instanceof LitElement) ?? [];
  }

  closeOtherExpansionItems(current: Node) {
    if (this.multi) return;
    const nodes = this.getExpansionItems();

    nodes.forEach((node) => {
      if (node === current) return;
      node['expanded'] = false;
    });
  }

  render() {
    const nodes = this.getExpansionItems();
    nodes.forEach((node) => {
      if (node instanceof LitElement) {
        node.requestUpdate();
      }
    });
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-expansion-panel': ExpansionPanel;
  }
}
