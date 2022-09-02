import "@finastra/list";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FlatTreeNode, TreeNode, TreeState } from "./interfaces";
import { styles } from './styles.css';
import "./tree-item/tree-item";

@customElement('fds-filter-tree')
export class FilterTree extends LitElement {
  static styles = styles;

  constructor() {
    super();
  }

    /**
   * List of items.
   */
  @property({ type: Array }) items: TreeNode[] = [];

  private tab: FlatTreeNode[] = [];
  private flatTree: FlatTreeNode[] = [];
  private tabState: TreeState = { added: [], removed: [] };
  private indeterminate = false;


  render() {
    this.flatTree = this.flatTreetransformer(this.items, 0, []);
    return html`
      ${this.renderChildren(this.items)}
    `;
  }

  renderChildren(items: TreeNode[]) {
    return html`
      <ul>
        ${items.map((item) => {
        return html`
        <fds-tree-item ?expanded=${this.haveChildren(item)} ?hideExpandIcon=${this.haveChildren(item)}
          @expand-click="${(event) => this.onExpandClick(item, event)}" ?selected=${item.isSelected}
          ?indeterminate=${this.indeterminate} @request-selected="${(event) => this.onRequestSelected(item, event)}"
          label=${item.label}>
        </fds-tree-item>
        ${item.children ? html` ${this.renderChildren(item.children)} ` : ''}
        `
      })}
      </ul>`
  }

  firstUpdated() {
    this.tab = this.flatTree;
    this.init(this.items);
  }

  haveChildren(item: TreeNode) {
    if (item.children) {
      return true;
    }
    return false;
  }

  init(items: TreeNode[]) {
    items.forEach((child) => {
      if (child.isSelected) {
        this.initSelection(child);
      }
      if (child.children) {
        this.init(child.children as TreeNode[])
      }
    })
  }

  onRequestSelected(item: TreeNode, event: any) {
    const eventType = event.detail.source;
    if (eventType === 'interaction') {
      this.tabState.added = [];
      this.tabState.removed = [];
      this.checkDescendants(item);
    }
  }

  onExpandClick(item: TreeNode, event: any) {
    if (event.detail) {
      this.getNodeElementByLabel(item.label).setAttribute('expanded', event.detail);
      this.getNodeElementByLabel(item.label).nextElementSibling.className = "show";
    }
    else {
      this.getNodeElementByLabel(item.label).removeAttribute('expanded');
      this.getNodeElementByLabel(item.label).nextElementSibling.className = "hide";
    }
  }

  selectChildren(items: TreeNode[]) {
    items.forEach((itemChild) => {
      this.getNodeElementByLabel(itemChild.label).removeAttribute('indeterminate');
      this.getNodeElementByLabel(itemChild.label).setAttribute('selected', 'true');
      this.tab[this.findIndex(this.toFlatTreeNode(itemChild))].selected = true;

      if (itemChild.children) {
        this.selectChildren(itemChild.children);
      }
    })
  }

  deselectChildren(items: TreeNode[]) {
    items.forEach((itemChild) => {
      this.getNodeElementByLabel(itemChild.label).removeAttribute('selected');
      this.tab[this.findIndex(this.toFlatTreeNode(itemChild))].selected = false;
      if (itemChild.children) {
        this.deselectChildren(itemChild.children);
      }
    })
  }

  getNodeElementByLabel(label: string) {
    let selected;
    const itemEl = this.renderRoot?.querySelectorAll('fds-tree-item');
    itemEl.forEach((node) => {
      if (node.getAttribute('label') == label) {
        selected = node;
      }
    })
    return selected;
  }

  flatTreetransformer(items: TreeNode[], level = 0, flatTree: FlatTreeNode[]) {
    items.forEach(element => {
      element.level = level;
      let flatItem = { item: element.label, level: element.level, selected: element.isSelected }
      flatTree.push(flatItem as FlatTreeNode);
      if (element.children)
        this.flatTreetransformer(element.children, level + 1, flatTree);
    });
    return flatTree;
  }

  getParentNode(node: FlatTreeNode): FlatTreeNode | null {
    const currentLevel = node.level;

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.flatTree.indexOf(node);

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.flatTree[i];
      if ((currentNode.level) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  toFlatTreeNode(item: TreeNode): FlatTreeNode {
    let selected;
    this.flatTree.forEach((node) => {
      if (node.item == item.label) {
        selected = node;
      }
    })
    return selected;
  }

  getDescendants(node: FlatTreeNode) {
    let nodeIndex = 0;
    let descendants: FlatTreeNode[] = [];

    this.tab.forEach((data, index) => {
      if (data.item === node.item) {
        nodeIndex = index;
      }
    });

    for (let i = nodeIndex + 1; i < this.tab.length; i++) {

      if (this.tab[i].level == this.tab[nodeIndex].level) {
        return descendants;
      }
      else {
        descendants.push({ item: this.tab[i].item, level: this.tab[i].level, selected: this.tab[i].selected })
      }
    }
    return descendants;
  }

  checkDescendants(item: TreeNode) {
    let nodeElement = this.getNodeElementByLabel(item.label);
    let index = this.findIndex(this.toFlatTreeNode(item));


    if (nodeElement.getAttribute('selected') == null) {
      this.onSelect(item, nodeElement, index, 'select');
    }

    if (nodeElement.getAttribute('selected') == '' || nodeElement.getAttribute('selected')) {
      this.onSelect(item, nodeElement, index, 'deselect');
    }
    this.requestUpdate();
  }

  onSelect(item: TreeNode, nodeEl: HTMLElement, index: number, eventType:string) {

    switch (eventType) {
      case 'select': {
        this.tab[index].selected = true;
        item.isSelected=true;
        this.tabState.added.push(item);
        this.checkIndeterminate(nodeEl);
        if (item.children) {
          this.selectChildren(item.children);
        }
        break;
      }
      case 'deselect': {
        this.tab[index].selected = false;
        item.isSelected=false;
        this.tabState.removed.push(item);
        this.checkIndeterminate(nodeEl);

        if (item.children) {
          this.deselectChildren(item.children);
        }
        break;
      }
      default: {
        break;
      }
    }

    if (this.getParentNode(this.toFlatTreeNode(item))) {
      this.notifyParent(this.getParentNode(this.toFlatTreeNode(item)) as FlatTreeNode);
    }

    console.log(this.tabState);
    this.dispatchEvent(
      new CustomEvent('filter-tree-update', {
        bubbles: true,
        composed: true,
        detail: {
          data: `${this.tabState}`
        }
      })
    )
  }

  checkIndeterminate(nodeEl: HTMLElement) {
    if (nodeEl.getAttribute('indeterminate') == '' || nodeEl.getAttribute('indeterminate')) {
      nodeEl.removeAttribute('indeterminate');
    }
  }

  initSelection(item: TreeNode) {
    let nodeEl = this.getNodeElementByLabel(item.label);
    let index = this.findIndex(this.toFlatTreeNode(item));
    this.onSelect(item,nodeEl,index,'select');
  }

  notifyParent(node: FlatTreeNode) {
    let index = this.findIndex(node);
    if (this.descendantsAllSelected(node)) {
      if (this.getNodeElementByLabel(node.item).getAttribute('indeterminate')) {
        this.getNodeElementByLabel(node.item).removeAttribute('indeterminate');
      }
      this.getNodeElementByLabel(node.item).setAttribute('selected', 'true');
      this.tab[index].selected = true;
    }
    else if (this.descendantsPartiallySelected(node)) {
      this.getNodeElementByLabel(node.item).setAttribute('indeterminate', 'true');
      this.getNodeElementByLabel(node.item).removeAttribute('selected');
      this.tab[index].selected = false;
    }
    else if (!this.descendantsAllSelected(node)) {
      this.getNodeElementByLabel(node.item).removeAttribute('selected');
      this.getNodeElementByLabel(node.item).removeAttribute('indeterminate');
      this.tab[index].selected = false;
    }
    if (this.getParentNode(node)) {
      this.notifyParent(this.getParentNode(node) as FlatTreeNode);
    }
  }

  isSelected(node: FlatTreeNode): boolean {
    return node.selected;
  }

  descendantsAllSelected(node: FlatTreeNode) {
    let descendantsLev = this.getDescendants(node);
    let descAllSelected = descendantsLev.length > 0 && descendantsLev.every(this.isSelected);
    return descAllSelected;
  }

  descendantsPartiallySelected(node: FlatTreeNode) {
    let descendantsLev = this.getDescendants(node);
    const result = descendantsLev.some(this.isSelected);

    return result && !this.descendantsAllSelected(node);
  }

  findIndex(node: FlatTreeNode) {
    let i;
    this.tab.forEach((data, index) => {
      if (data.item === node.item) {
        i = index;
      }
    });
    return i;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fds-filter-tree': FilterTree;
  }
}
