import "@finastra/list";
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  parent?: TreeNode;
  isSelected?: boolean;
  level?: number
}

@customElement('fds-filter-tree')
export class FilterTree extends LitElement {
  static styles = styles;

  @query('fds-filter') protected filter!: HTMLDivElement;

  @query('fds-check-list-item') protected checkListItem!: HTMLDivElement;

  left=false;
  itemArray= [];

  call=0

  constructor() {
    super();
  }


  private _items: TreeNode[] = [];
  @property({ attribute: false })
  public get items(): TreeNode[] {
      return this._items;
  }
  public set items(value: TreeNode[]) {
      this._items = value
  }
  
 async connectedCallback() {
    await super.connectedCallback();
  }

  render() {
    return html`
      ${this.renderChildren(this.items)}
    `;
  }

  renderChildren(items: TreeNode[]) {
    return html`
      <ul id="list" multi>
        ${items.map((item) => {
        return html`
          <fds-check-list-item  left @request-selected="${() => this.onRequestSelected(item)}"> ${item.label} </fds-check-list-item>
          ${item.children ? html` ${this.renderChildren(item.children)} `: ''}
        `
      })}
      </ul> `
  }

  onRequestSelected(item: TreeNode) {
    if(this.getNodeByLabel(item.label).getAttribute('selected') == null) {
      if(item.children){
        this.selectChildren(item.children);
        return;
      }
    }
    else{
      if(item.children){
        this.deselectChildren(item.children);
        return;
      }
    }
  }

   selectChildren(item: TreeNode[]) {
      item.forEach((itemChild) => {
        this.getNodeByLabel(itemChild.label).setAttribute('selected','true');
        if(itemChild.children){
          this.selectChildren(itemChild.children);
        }
    })
  }
  
  deselectChildren(item: TreeNode[]) {
      item.forEach((itemChild) => {
        this.getNodeByLabel(itemChild.label).removeAttribute('selected');
        if(itemChild.children){
          this.deselectChildren(itemChild.children);
        }
    })
  }

getNodeByLabel(index) {
  let selected ;
  const itemSelector='fds-check-list-item';
  const slotEl = this.renderRoot?.querySelectorAll<HTMLSlotElement>(itemSelector);
    slotEl.forEach((node) => {
        if(node.innerText == index) {
          selected = node;
        }
    })
  return selected;
 }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-filter-tree': FilterTree;
  }
}
