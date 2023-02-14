import '@finastra/divider';
import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { styles } from './icon-bar.css';

/**
 * @attr [showLabels=false] - Show or hide the items labels.
 * @attr [hideNotification=false] - Removes the notification on item click.
 */

@customElement('fds-icon-bar')
export class IconBar extends LitElement {
  static styles = styles;

  @queryAssignedElements({ slot: 'footer' })
  _footer!: Array<HTMLElement>;

  @property({ type: Boolean }) showLabels = false;

  @property({ type: Boolean })
  hideNotification = false;

  private footer = false;

  render() {
    const nodes = this.getItems();
    nodes.forEach((node) => {
      if (node instanceof LitElement) {
        node.requestUpdate();
      }
    });
    return html`
      <slot></slot>
      <div class="footer">
        ${this.footer ? html` <fds-divider></fds-divider>` : ''}
        <slot name="footer" @slotchange=${this.onFooterSlotChanged}></slot>
      </div>
    `;
  }

  renderFooter() {
    return html`
      <div class="footer">
        <fds-divider></fds-divider>
        <slot name="footer"></slot>
      </div>
    `;
  }

  onFooterSlotChanged() {
    this.footer = false;
    if (this._footer.length !== 0) {
      this.footer = true;
    }
    this.requestUpdate();
  }

  deselectOthers(current: Node) {
    const nodes = this.getItems();
    nodes.forEach((node, index) => {
      if (node === current) {
        this.dispatchSelectedEvent(index);
        return;
      } else {
        node['current'] = false;
      }
    });
  }

  dispatchSelectedEvent(index) {
    this.dispatchEvent(
      new CustomEvent('selected', {
        bubbles: true,
        cancelable: true,
        detail: {
          index
        }
      })
    );
  }

  getItems() {
    const slotArray: Node[] = [];
    const slotSelector = 'slot';
    const slotEl = this.renderRoot?.querySelectorAll<HTMLSlotElement>(slotSelector);
    slotEl.forEach((node) => {
      node?.assignedNodes().filter((node) => {
        slotArray.push(node);
      });
    });
    return slotArray.filter((node) => node instanceof LitElement) ?? [];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-bar': IconBar;
  }
}
