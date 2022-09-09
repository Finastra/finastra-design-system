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

  private flatTree: FlatTreeNode[] = [];
  private flatTreeTransf: FlatTreeNode[] = [];
  private tabState: TreeState = { added: [], removed: [] };
  private indeterminate = false;


  render() {
    this.flatTreeTransf = this.flatTreeTransformer(this.items, 0, []);
    this.flatTree = this.flatTreeTransf;
    return html`
      ${this.renderChildren(this.items)}
    `;
  }

  renderChildren(items: TreeNode[]) {
    return html`
      <ul>
        ${items.map((item, index) => {
        return html`
        <li>
          <fds-tree-item id='${item.level}-${index}' ?expanded=${this.haveChildren(item)}
            ?hideExpandIcon=${this.haveChildren(item)} ?selected=${item.isSelected} ?indeterminate=${this.indeterminate}
            label=${item.label} @expand-click="${(event) => this.onExpandClick(item, index, event)}"
            @request-selected="${(event) => this.onRequestSelected(item, index, event)}">
          </fds-tree-item>
          ${item.children ? html`${this.renderChildren(item.children)}` : ''}
        </li>
        `
      })}
      </ul>`
  }

  firstUpdated() {
    // this.flatTree = this.flatTreeTransf;
    this.init(this.items);
  }

  haveChildren(item: TreeNode) {
    if (item.children) {
      return true;
    }
    return false;
  }

  init(items: TreeNode[]) {
    items.forEach((child, index) => {
      if (child.isSelected) {
        this.initSelection(child, index);
      }
      if (child.children) {
        this.init(child.children as TreeNode[])
      }
    })
  }

  onRequestSelected(item: TreeNode, index: number, event: any) {
    const eventType = event.detail.source;
    if (eventType === 'interaction') {
      this.tabState.added = [];
      this.tabState.removed = [];
      this.checkDescendants(item, index);
    }
  }

  onExpandClick(item: TreeNode, index: number, event: any) {
    if (event.detail) {
      this.getNodeElementById(item.level + "-" + index).setAttribute('expanded', event.detail);
      this.getNodeElementById(item.level + "-" + index).nextElementSibling.className = "show";
    }
    else {
      this.getNodeElementById(item.level + "-" + index).removeAttribute('expanded');
      this.getNodeElementById(item.level + "-" + index).nextElementSibling.className = "hide";
    }
  }

  selectChildren(items: TreeNode[]) {
    items.forEach((itemChild, index) => {
      this.getNodeElementById(itemChild.level + "-" + index).removeAttribute('indeterminate');
      this.getNodeElementById(itemChild.level + "-" + index).setAttribute('selected', 'true');
      this.flatTree[this.findIndex(this.toFlatTreeNode(itemChild, index))].selected = true;
      itemChild.isSelected = true;

      if (itemChild.children) {
        this.selectChildren(itemChild.children);
      }
    })
  }

  deselectChildren(items: TreeNode[]) {
    items.forEach((itemChild, index) => {
      this.getNodeElementById(itemChild.level + "-" + index).removeAttribute('selected');
      this.flatTree[this.findIndex(this.toFlatTreeNode(itemChild, index))].selected = false;
      itemChild.isSelected = false;
      if (itemChild.children) {
        this.deselectChildren(itemChild.children);
      }
    })
  }

  getNodeElementById(id: string) {
    let selected;
    const itemEl = this.renderRoot?.querySelectorAll('fds-tree-item');
    itemEl.forEach((node) => {
      if (node.getAttribute('id') === id) {
        selected = node;
      }
    })
    return selected;
  }

  flatTreeTransformer(items: TreeNode[], level = 0, flatTreeTransf: FlatTreeNode[]) {
    items.forEach((element, index) => {
      element.level = level;
      element.expandable = false;
      if (element.isSelected == undefined) {
        element.isSelected = false;
      }
      if (element.children) {
        element.expandable = true;
      }
      let flatItem = { item: element.label, level: element.level, selected: element.isSelected, expandable: element.expandable, id: element.level + '-' + index }
      flatTreeTransf.push(flatItem as FlatTreeNode);
      if (element.children)
        this.flatTreeTransformer(element.children, level + 1, flatTreeTransf);
    });
    return flatTreeTransf;
  }

  getParentNode(node: FlatTreeNode): FlatTreeNode | null {
    const currentLevel = node.level;

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.flatTreeTransf.indexOf(node);

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.flatTreeTransf[i];
      if ((currentNode.level) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  toFlatTreeNode(item: TreeNode, index): FlatTreeNode {
    let selected;
    this.flatTreeTransf.forEach((node) => {
      if (node.id == (item.level + '-' + index)) {
        selected = node;
      }
    })
    return selected;
  }

  getDescendants(node: FlatTreeNode) {
    let nodeIndex = 0;
    let descendants: FlatTreeNode[] = [];

    this.flatTree.forEach((data, index) => {
      if (data.id === node.id) {
        nodeIndex = index;
      }
    });

    for (let i = nodeIndex + 1; i < this.flatTree.length; i++) {
      if (!this.flatTree[nodeIndex].expandable) {
        return descendants;
      }
      else if (this.flatTree[i].level <= this.flatTree[nodeIndex].level) {
        return descendants;
      }
      else {
        descendants.push({ item: this.flatTree[i].item, level: this.flatTree[i].level, selected: this.flatTree[i].selected, expandable: this.flatTree[i].expandable, id: this.flatTree[i].id })
      }
    }
    return descendants;
  }

  checkDescendants(item: TreeNode, indexInTreeNode) {
    let nodeElement = this.getNodeElementById(item.level + "-" + indexInTreeNode);
    let indexInFlatTree = this.findIndex(this.toFlatTreeNode(item, indexInTreeNode));


    if (nodeElement.getAttribute('selected') == null) {
      this.onSelect(item, nodeElement, indexInTreeNode, indexInFlatTree, 'select');
    }

    if (nodeElement.getAttribute('selected') == '' || nodeElement.getAttribute('selected')) {
      this.onSelect(item, nodeElement, indexInTreeNode, indexInFlatTree, 'deselect');
    }
    this.requestUpdate();
  }

  onSelect(item: TreeNode, nodeEl: HTMLElement, indexInTreeNode: number, indexInFlatTreeNode: number, eventType: string) {

    switch (eventType) {
      case 'select': {
        this.flatTree[indexInFlatTreeNode].selected = true;
        item.isSelected = true;
        this.tabState.added.push(item);
        this.checkIndeterminate(nodeEl);
        if (item.children) {
          this.selectChildren(item.children);
        }
        break;
      }
      case 'deselect': {
        this.flatTree[indexInFlatTreeNode].selected = false;
        item.isSelected = false;
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

    if (this.getParentNode(this.toFlatTreeNode(item, indexInTreeNode))) {
      this.notifyParent(this.getParentNode(this.toFlatTreeNode(item, indexInTreeNode)) as FlatTreeNode);
    }

    this.dispatchEvent(
      new CustomEvent('filter-tree-check', {
        bubbles: true,
        composed: true, 'detail': this.tabState
      })
    )
  }


  checkIndeterminate(nodeEl: HTMLElement) {
    if (nodeEl.getAttribute('indeterminate') == '' || nodeEl.getAttribute('indeterminate')) {
      nodeEl.removeAttribute('indeterminate');
    }
  }

  initSelection(item: TreeNode, indexInTreeNode) {
    let nodeEl = this.getNodeElementById(item.level + "-" + indexInTreeNode);
    let indexInFlatTreeNode = this.findIndex(this.toFlatTreeNode(item, indexInTreeNode));
    this.onSelect(item, nodeEl, indexInTreeNode, indexInFlatTreeNode, 'select');
  }

  notifyParent(node: FlatTreeNode) {
    let indexInFlatTree = this.findIndex(node);
    if (this.descendantsAllSelected(node)) {
      if (this.getNodeElementById(node.id).getAttribute('indeterminate')) {
        this.getNodeElementById(node.id).removeAttribute('indeterminate');
      }
      this.getNodeElementById(node.id).setAttribute('selected', 'true');
      this.flatTree[indexInFlatTree].selected = true;
    }
    else if (this.descendantsPartiallySelected(node)) {
      this.getNodeElementById(node.id).setAttribute('indeterminate', 'true');
      this.getNodeElementById(node.id).removeAttribute('selected');
      this.flatTree[indexInFlatTree].selected = false;
    }
    else if (!this.descendantsAllSelected(node)) {
      this.getNodeElementById(node.id).removeAttribute('selected');
      this.getNodeElementById(node.id).removeAttribute('indeterminate');
      this.flatTree[indexInFlatTree].selected = false;
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
    this.flatTree.forEach((data, index) => {
      if (data.id === node.id) {
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
