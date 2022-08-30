import "@finastra/list";
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styles } from './styles.css';
import "./tree-item/tree-item";

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  isSelected?: boolean;
  level?: number
}

export interface TranformedTreeNode {
  item: string;
  level: number;
  selected: boolean;
}

@customElement('fds-filter-tree')
export class FilterTree extends LitElement {
  static styles = styles;

  @query('fds-check-list-item') protected checkListItem!: HTMLDivElement;

  constructor() {
    super();
  }

  @property({type: Array}) items: TreeNode[] = [];

  private tab: TranformedTreeNode[] = [];
  private itemsTransformed: TranformedTreeNode[] = [];
  private indeterminate = false;


  firstUpdated() {
    this.tab = this.itemsTransformed;
  }

  render() {
    this.itemsTransformed = this.transformer(this.items, 0, []);
    return html`
      ${this.renderChildren(this.items)}
    `;
  }

  renderChildren(items: TreeNode[]) {
    return html`
      <ul id="list" multi>
        ${items.map((item) => {
        return html`
        <fds-tree-item ?indeterminate=${this.indeterminate}
          @request-selected="${(event) => this.onRequestSelected(item, event)}" label=${item.label}>
        </fds-tree-item>
        ${item.children ? html` ${this.renderChildren(item.children)} ` : ''}
        `
      })}
      </ul>`
  }

  onRequestSelected(item: TreeNode, event) {
    const eventType = event.detail.source;
    if (eventType === 'interaction') {
      this.changeDescendants(item);
    }
  }

  selectChildren(item: TreeNode[]) {
    item.forEach((itemChild) => {
      this.getNodeByLabel(itemChild.label).setAttribute('selected', 'true');
      this.tab[this.findIndex(this.toTranformedTreeNode(itemChild))].selected = true;

      if (itemChild.children) {
        this.selectChildren(itemChild.children);
      }
    })
  }


  deselectChildren(item: TreeNode[]) {
    item.forEach((itemChild) => {
      this.getNodeByLabel(itemChild.label).removeAttribute('selected');
      this.tab[this.findIndex(this.toTranformedTreeNode(itemChild))].selected = false;
      if (itemChild.children) {
        this.deselectChildren(itemChild.children);
      }
    })
  }

  getNodeByLabel(index) {
    let selected;
    const itemSelector = 'fds-tree-item';
    const itemEl = this.renderRoot?.querySelectorAll<HTMLSlotElement>(itemSelector);
    itemEl.forEach((node) => {
      if (node.getAttribute('label') == index) {
        selected = node;
      }
    })
    return selected;

  }

  getLevel(node) {
    return node.level;
  }

  transformer(items: TreeNode[], level = 0, output: TranformedTreeNode[]) {
    items.forEach(element => {
      element.level = level;
      element.isSelected = false;
      let i = { item: element.label, level: element.level, selected: element.isSelected }
      output.push(i as TranformedTreeNode);

      if (element.children)
        this.transformer(element.children, level + 1, output);
    });
    return output
  }

  getParentNode(node: TranformedTreeNode): TranformedTreeNode | null {
    const currentLevel = node.level;

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.itemsTransformed.indexOf(node);

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.itemsTransformed[i];
      if (this.getLevel(currentNode) < currentLevel) {

        return currentNode;
      }
    }
    return null;
  }

  toTranformedTreeNode(item: TreeNode): TranformedTreeNode {
    let selected;
    this.itemsTransformed.forEach((node) => {
      if (node.item == item.label) {
        selected = node;
      }
    })
    return selected;
  }

  getDescendants(node: TranformedTreeNode) {
    let ind = 0;
    let output: TranformedTreeNode[] = [];
    this.tab.forEach((data, index) => {
      if (data.item === node.item) {
        ind = index;
      }
    });
    for (let i = ind + 1; i < this.tab.length; i++) {

      if (this.tab[i].level == this.tab[ind].level) {
        return output;
      }
      else {
        output.push({ item: this.tab[i].item, level: this.tab[i].level, selected: this.tab[i].selected })
      }
    }
    return output;
  }

  getFirstDescendants(node: TranformedTreeNode) {
    let desc = this.getDescendants(node);
    let output: TranformedTreeNode[] = [];

    desc.forEach(element => {
      if (node.level != undefined) {
        if (element.level == node.level + 1) {
          output.push({ item: element.item, level: element.level, selected: element.selected });
        }
      }
    });
    return output;
  }

  changeDescendants(item: TreeNode) {
    let node = this.getNodeByLabel(item.label);
    let index = this.findIndex(this.toTranformedTreeNode(item));

    if (node.getAttribute('selected') == null) {
      this.tab[index].selected = true;

      if (item.children) {
        this.selectChildren(item.children);
      }
      if(this.getParentNode(this.toTranformedTreeNode(item))) {
        this.notifyParent(this.getParentNode(this.toTranformedTreeNode(item)) as TranformedTreeNode);
      }

    }

    if (node.getAttribute('selected') == '' || node.getAttribute('selected')) {
      this.tab[index].selected = false;

      if (item.children) {
        this.deselectChildren(item.children);
      }
      if(this.getParentNode(this.toTranformedTreeNode(item))) {
        this.notifyParent(this.getParentNode(this.toTranformedTreeNode(item)) as TranformedTreeNode);
      }
    }
    this.requestUpdate();
  }

  notifyParent(node: TranformedTreeNode) {
    let index = this.findIndex(node);
    if(this.descendantsAllSelected(node)) {

      if(this.getNodeByLabel(node.item).getAttribute('indeterminate')) {
        this.getNodeByLabel(node.item).removeAttribute('indeterminate');
      }
      this.getNodeByLabel(node.item).setAttribute('selected', 'true');
      this.tab[index].selected = true;
    }
    else if(this.descendantsPartiallySelected(node)) {
      this.getNodeByLabel(node.item).setAttribute('indeterminate', 'true');
      this.getNodeByLabel(node.item).removeAttribute('selected');
      this.tab[index].selected = false;

    }
    else {
      this.getNodeByLabel(node.item).removeAttribute('selected');
      this.getNodeByLabel(node.item).removeAttribute('indeterminate');
      this.tab[index].selected = false;
    }
    if(this.getParentNode(node)) {
      this.notifyParent(this.getParentNode(node) as TranformedTreeNode);
    }

  }

  isSelected(node: TranformedTreeNode): boolean {
    return node.selected;
  }

  descendantsAllSelected(node: TranformedTreeNode) {
    let descendantsLev = this.getFirstDescendants(node);
    let descAllSelected = descendantsLev.length> 0 && descendantsLev.every(this.isSelected);
    return descAllSelected;
  }

  descendantsPartiallySelected(node: TranformedTreeNode) {
    let descendantsLev = this.getFirstDescendants(node);
    const result = descendantsLev.some(this.isSelected);

    return result && !this.descendantsAllSelected(node);
  }

  findIndex(node: TranformedTreeNode) {
    let ind;
    this.tab.forEach((data, index) => {
      if (data.item === node.item) {
        ind = index;
      }
    });
    return ind;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-filter-tree': FilterTree;
  }
}
