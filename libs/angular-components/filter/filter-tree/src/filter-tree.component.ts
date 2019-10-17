import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { UXGFilter } from '@ffdc/uxg-angular-components/filter/models';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  parent?: TreeNode;
  isSelected?: boolean;
}

@Component({
  selector: 'uxg-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.scss']
})
export class FilterTreeComponent extends UXGFilter<TreeNode> implements OnInit {
  public treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<TreeNode>();
  public checkListSelection: SelectionModel<TreeNode>;

  constructor() {
    super();
    this.checkListSelection = new SelectionModel<TreeNode>(true);
    this.checkListSelection.changed.subscribe(changes => {
      this.changes.emit({
        added: changes.added,
        removed: changes.removed
      });
    });
  }

  ngOnInit() {
    this.dataSource.data = this.data;
  }

  clearSelection() {
    this.checkListSelection.clear();
  }

  toggleAllNodes() {
    this.treeControl.collapseAll();
  }

  descendantsAllSelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child => this.checkListSelection.isSelected(child));
    return descAllSelected;
  }

  descendantsPartiallySelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checkListSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  itemSelectionToggle(node: TreeNode): void {
    this.checkListSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checkListSelection.isSelected(node)
      ? this.checkListSelection.select(...descendants)
      : this.checkListSelection.deselect(...descendants);
    descendants.every(child => this.checkListSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  leafItemSelectionToggle(node: TreeNode): void {
    this.checkListSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: TreeNode): void {
    let parent: TreeNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: TreeNode): void {
    const nodeSelected = this.checkListSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child => this.checkListSelection.isSelected(child));
    if (nodeSelected && !descAllSelected) {
      this.checkListSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checkListSelection.select(node);
    }
  }

  getParentNode(currentNode: TreeNode): TreeNode | null {
    let parentNode: TreeNode = null;
    this.dataSource.data.forEach(node => {
      if (node.children && node.children.length > 0) {
        node.children.forEach(child => {
          if (currentNode.label === child.label) {
            parentNode = node;
          }
        });
      }
    });
    return parentNode;
  }

  getRootNode(currentNode: TreeNode): TreeNode {
    if (this.isRootNode(currentNode)) return currentNode;
    return this.getRootNode(this.getParentNode(currentNode));
  }

  isRootNode(node: TreeNode): boolean {
    return this.getParentNode(node) ? false : true;
  }

  isRootNodeSelected(node: TreeNode): boolean {
    return this.checkListSelection.isSelected(this.getRootNode(node));
  }

  hasChild = (_: number, node: TreeNode) => node.children && node.children.length;
}
