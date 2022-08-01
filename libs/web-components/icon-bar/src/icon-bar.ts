import '@finastra/divider';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './icon-bar.css';

@customElement('fds-icon-bar')
export class IconBar extends LitElement {
  static styles = styles;

  public divider = false;

  render() {
    const nodes = this.getItemsTest();
    nodes.forEach(node => {
      if (node instanceof LitElement) {
        node.requestUpdate();
      }      
    })
    return html`<slot></slot>
    <fds-divider></fds-divider>
    <slot name="footer"></slot>
    `;
  } 

  deselectOthers(current: Node) {  
    const nodes = this.getItemsTest();  
    nodes.forEach((node) => {
        if (node === current) {
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
