import '@finastra/divider';
import { html, LitElement } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { styles } from './icon-bar.css';


/**
  * @attr [large=false] - Make the icon bar larger.
*/

@customElement('fds-icon-bar')
export class IconBar extends LitElement {
  static styles = styles;

  @queryAssignedElements({ slot: 'footer' })
  _pages!: Array<HTMLElement>;

  @property({ type: Boolean }) large = false;


  render() {
    const nodes = this.getItemsTest();
    nodes.forEach( node => {

      if (node instanceof LitElement) {
        node.requestUpdate();
      }      
    })
    return html`
      <slot class="hey"></slot>
      ${this._pages ? this.renderFooter() : html`<div></div>`}
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
          this.dispatchEvent(new CustomEvent('selected', {
            bubbles: true,
            cancelable: true,
              detail: {
                index
              }
            }
            ));
          return;
        }
        else {
          node['current'] = false;
        }
     })
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
