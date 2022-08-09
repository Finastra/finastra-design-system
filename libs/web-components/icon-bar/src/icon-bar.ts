import '@finastra/divider';
import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { styles } from './icon-bar.css';

/**
  * @attr [large=false] - Make the icon bar larger.
  * @attr [removeNotification=false] - Removes the notification on item click.
*/

@customElement('fds-icon-bar')
export class IconBar extends LitElement {
  static styles = styles;

  @queryAssignedElements({ slot: 'footer' })
  _footer!: Array<HTMLElement>;

  @property({ type: Boolean }) large = false;

  @property({ type: Boolean })
  removeNotification= false;

  render() {
    const nodes = this.getItemsTest();
    nodes.forEach( node => {

      if (node instanceof LitElement) {
        node.requestUpdate();
      }      
    })
    return html`
      <slot></slot>
      ${this._footer? this.renderFooter() : html`<div></div>`}
    `;
  } 

  renderFooter(){
    return html`
      <div class="footer">
        <fds-divider></fds-divider>
        <slot name="footer"></slot>
      </div>
    `
  }
  
  deselectOthers(current: Node) {  
    const nodes = this.getItemsTest();  
    nodes.forEach((node,index) => {
        if (node === current) {
          this.dispatchSelectedEvent(index);
          return;
        }
        else {
          node['current'] = false;
        }
     })
  }

  dispatchSelectedEvent(index) {
    this.dispatchEvent(new CustomEvent('selected', {
      bubbles: true,
      cancelable: true,
        detail: {
          index
        }
      }
      ));
  }
  
  getItemsTest() {
    const slotArray : Node[] = [];
    const slotSelector='slot';
    const slotEl = this.renderRoot?.querySelectorAll<HTMLSlotElement>(slotSelector);
    slotEl.forEach((node) => {
      node?.assignedNodes().filter(node =>{
        slotArray.push(node);
        });
     })
     return slotArray.filter(node => node instanceof LitElement) ?? [];;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-icon-bar': IconBar;
  }
}
