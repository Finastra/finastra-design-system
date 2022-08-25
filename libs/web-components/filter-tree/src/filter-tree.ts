import "@finastra/list";
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  isSelected?: boolean;
  level?: number
}

export interface TranformedTreeNode{
  item: string;
  level: number;
  expandable: boolean;
}

@customElement('fds-filter-tree')
export class FilterTree extends LitElement {
  static styles = styles;

  @query('fds-check-list-item') protected checkListItem!: HTMLDivElement;

  constructor() {
    super();
  }

  private itemsTransformed: TranformedTreeNode[] = [];
  private _items: TreeNode[] = [];
  @property({ attribute: false })
  public get items(): TreeNode[] {
      return this._items;
  }
  public set items(value: TreeNode[]) {
      this._items = value
  }
  
  render() {
    this.itemsTransformed=this.transformer(this.items,0,[]);
    return html`
      ${this.renderChildren(this.items)}
    `;
  }

  renderChildren(items: TreeNode[]) {
    return html`
      <ul id="list" multi>
        ${items.map((item) => {
        return html`
          <fds-check-list-item  left @request-selected="${(event) => this.onRequestSelected(item, event)}">${item.label} </fds-check-list-item>
          ${item.children ? html` ${this.renderChildren(item.children)} `: ''}
        `
      })}
      </ul> `
  }

  onRequestSelected(item: TreeNode, event) {
    const eventType = event.detail.source;
    if(eventType === 'interaction'){
      this.checkAllParentsSelection(this.getItemFromTransformedData(item));
      this.getParentNode(this.getItemFromTransformedData(item));
      if(this.getNodeByLabel(item.label).getAttribute('selected') == null) {
        if(item.children){
          this.selectChildren(item.children);
        }
      }
      else{
        if(item.children){
          this.deselectChildren(item.children);
        }
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
  const itemEl = this.renderRoot?.querySelectorAll<HTMLSlotElement>(itemSelector);
  itemEl.forEach((node) => {
        if(node.innerText == index) {
          selected = node;
        }
    })
  return selected;
 }


  getLevel(node) {
    return node.level;
  }

transformer(items: TreeNode[], level = 0, output:TranformedTreeNode[]) {
  items.forEach(element => {
    element.level = level;
    let i = {item: element.label, level: element.level, expandable: !!element.children?.length}
    output.push(i as TranformedTreeNode);

    if(element.children)
    this.transformer(element.children , level+1 ,output);
  });
return output
}

getParentNode(node: TranformedTreeNode): TranformedTreeNode | null {
  const currentLevel = node.level;

  if (currentLevel < 1) {
    return null;
  }

  const startIndex =  this.itemsTransformed.indexOf(node);

  for (let i = startIndex; i >= 0; i--) {
    const currentNode = this.itemsTransformed[i];
    if (this.getLevel(currentNode) < currentLevel) {
      return currentNode;
    }
  }
  return null;
}

getItemFromTransformedData(item: TreeNode) {
  let selected ;
  this.itemsTransformed.forEach((node) => {
    if(node.item == item.label) {
      selected=node;
    }
})
return selected;
}

checkAllParentsSelection(node: TranformedTreeNode): void {
  let parent: TranformedTreeNode | null = this.getParentNode(node);
  while (parent) {
    console.log(parent);
    //this.checkRootNodeSelection(parent);
    parent = this.getParentNode(parent);
  }
}

// checkRootNodeSelection(node: TranformedTreeNode): void {
//   if(this.getNodeByLabel(node.item).getAttribute('selected') == null) {
//   }
// }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-filter-tree': FilterTree;
  }
}
