import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material';
import { NestedTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';

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
export class FilterTreeComponent {
  public treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  public dataSource = new MatTreeNestedDataSource<TreeNode>();
  public checklistSelection: SelectionModel<TreeNode>;

  get datasource(): TreeNode[] {
    return this.dataSource.data;
  }

  @Input()
  set datasource(datasource: TreeNode[]) {
    this.dataSource.data = datasource;
  }

  // tslint:disable-next-line: no-output-native
  @Output()
  change = new EventEmitter<any>();

  constructor() {
    this.checklistSelection = new SelectionModel<TreeNode>(true);
    this.checklistSelection.changed.subscribe(changes => {
      changes.added.forEach((node: TreeNode) => {
        node.parent = this.getParentNode(node);
      });
      changes.removed.forEach((node: TreeNode) => {
        node.parent = this.getParentNode(node);
      });
      this.change.emit({
        added: changes.added,
        removed: changes.removed
      });
    });
  }

  clearSelection() {
    this.checklistSelection.clear();
  }

  toggleAllNode() {
    this.treeControl.collapseAll();
  }

  descendantsAllSelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child => this.checklistSelection.isSelected(child));
    return descAllSelected;
  }

  descendantsPartiallySelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  ItemSelectionToggle(node: TreeNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
    descendants.every(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  LeafItemSelectionToggle(node: TreeNode): void {
    this.checklistSelection.toggle(node);
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
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child => this.checklistSelection.isSelected(child));
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
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

  isRootNode(node: TreeNode): boolean {
    return this.getParentNode(node) ? false : true;
  }

  hasChild = (_: number, node: TreeNode) => node.children && node.children.length;
}
