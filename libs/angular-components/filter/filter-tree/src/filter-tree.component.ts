import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Subscription } from 'rxjs';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  parent?: TreeNode;
  isSelected?: boolean;
}
interface UXGFilterChanges {
  added: TreeNode[];
  removed: TreeNode[];
}

@Component({
  selector: 'uxg-filter-tree',
  templateUrl: './filter-tree.component.html',
  styleUrls: ['./filter-tree.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          overflow: 'hidden',
          height: '*'
        })
      ),
      state(
        'out',
        style({
          opacity: '0',
          overflow: 'hidden',
          height: '0'
        })
      ),
      transition('in => out', animate('250ms ease-out')),
      transition('out => in', animate('250ms ease-in'))
    ])
  ]
})
export class FilterTreeComponent implements OnChanges {
  public treeControl = new NestedTreeControl<TreeNode>((node) => node.children);
  public dataSource = new MatTreeNestedDataSource<TreeNode>();
  public checkListSelection!: SelectionModel<TreeNode>;
  selectedData: TreeNode[] = [];
  subscription?: Subscription;

  private _data: TreeNode[] = [];

  @Input()
  set data(data: TreeNode[]) {
    this._data = data;
  }

  get data(): TreeNode[] {
    return this._data;
  }

  @Input() multipleSelection = true;
  @Output() changes = new EventEmitter<UXGFilterChanges>();

  constructor(private hostElement: ElementRef) {
    this.hostElement.nativeElement.__component = this;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.data || changes.selectedData) {
      changes.data ? (this.dataSource.data = changes.data.currentValue) : (this.dataSource.data = this.data);
      changes.selectedData
        ? (this.selectedData = changes.selectedData.currentValue)
        : (this.selectedData = this.getSelectedNodes(this.dataSource.data));

      this.checkListSelection = new SelectionModel<TreeNode>(this.multipleSelection, this.selectedData);
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      // tslint:disable-next-line: no-shadowed-variable
      this.subscription = this.checkListSelection.changed.subscribe((changes) => {
        this.changes.emit({
          added: changes.added,
          removed: changes.removed
        });
      });
    }
  }

  clearSelection() {
    this.checkListSelection.clear();
  }

  toggleAllNodes() {
    this.treeControl.collapseAll();
  }

  descendantsAllSelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) => this.checkListSelection.isSelected(child));
    return descAllSelected;
  }

  descendantsPartiallySelected(node: TreeNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some((child) => this.checkListSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  itemSelectionToggle(node: TreeNode) {
    this.checkListSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checkListSelection.isSelected(node)
      ? this.checkListSelection.select(...descendants)
      : this.checkListSelection.deselect(...descendants);
    descendants.every((child) => this.checkListSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  leafItemSelectionToggle(node: TreeNode) {
    this.checkListSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  checkAllParentsSelection(node: TreeNode) {
    let parent: TreeNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  checkRootNodeSelection(node: TreeNode) {
    const nodeSelected = this.checkListSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every((child) => this.checkListSelection.isSelected(child));
    if (nodeSelected && !descAllSelected) {
      this.checkListSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checkListSelection.select(node);
    }
  }

  getParentNode(currentNode: TreeNode): TreeNode | null {
    let parentNode: TreeNode | null = null;
    this.dataSource.data.forEach((node) => {
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => {
          if (currentNode.label === child.label) {
            parentNode = node;
          }
        });
      }
    });
    return parentNode;
  }

  getRootNode(currentNode: TreeNode): TreeNode {
    const parentNode = this.getParentNode(currentNode);
    if (parentNode) {
      return this.getRootNode(parentNode);
    }
    return currentNode;
  }

  isRootNodeSelected(node: TreeNode): boolean {
    return this.checkListSelection.isSelected(this.getRootNode(node));
  }

  hasChild = (_: number, node: TreeNode) => node.children && node.children.length;

  expandStart(node: TreeNode, el: HTMLElement) {
    if (this.treeControl.isExpanded(node)) {
      el.classList.remove('collapsed');
    }
  }

  expandEnd(node: TreeNode, el: HTMLElement) {
    if (!this.treeControl.isExpanded(node)) {
      el.classList.add('collapsed');
    }
  }

  getSelectedNodes(data: TreeNode[]): TreeNode[] {
    const result = data.reduce((acc, node) => {
      if (node.isSelected) acc.push(node);
      if (node.children) {
        const childNodes = node.children.filter((childNode) => childNode.isSelected);
        acc.push(...childNodes);
      }
      return acc;
    }, new Array<TreeNode>());
    return result;
  }

  getState() {
    return [...this.checkListSelection.selected];
  }

  setState(data: any[]) {
    this.ngOnChanges({ selectedData: new SimpleChange(null, [...data], false) });
  }
}
