import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { FlatTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';

export interface FieldNode {
  label: string;
  children?: FieldNode[];
}

interface FieldFlatNode {
  expandable: boolean;
  label: string;
  level: number;
}

@Component({
  selector: 'uxg-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent implements OnInit, OnChanges {

  private _datasource: FieldNode[];

  get datasource(): FieldNode[] {
    return this._datasource;
  }

  @Input()
  set datasource(datasource: FieldNode[]) {
    this._datasource = datasource;
  }

  // tslint:disable-next-line: no-output-native
  @Output()
  change = new EventEmitter<any>();

  filterArray: string[] = [];
  groupList: string[] = [];

  private _transformer = (node: FieldNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      label: node.label,
      level: level,
    };
  }

  // tslint:disable-next-line: member-ordering
  treeControl = new FlatTreeControl<FieldFlatNode>(
    node => node.level, node => node.expandable
  );

  // tslint:disable-next-line: member-ordering
  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );

  // tslint:disable-next-line: member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // tslint:disable-next-line: member-ordering
  checklistSelection = new SelectionModel<FieldFlatNode>(true);

  constructor() { }

  getLevel = (node: FieldFlatNode) => node.level;

  hasChild = (_: number, node: FieldFlatNode) => node.expandable;

  ngOnInit() {
    this.dataSource.data = this._datasource;
    //this.treeControl.expandAll();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.clearSelection();
    this.dataSource.data = changes.datasource.currentValue;
  }

  clearSelection() {
    this.checklistSelection.clear();
    this.emitUpdate();
  }

  descendantsAllSelected(node: FieldFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  descendantsPartiallySelected(node: FieldFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  ItemSelectionToggle(node: FieldFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);

  }

  LeafItemSelectionToggle(node: FieldFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);

  }

  checkAllParentsSelection(node: FieldFlatNode): void {
    let parent: FieldFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
    this.emitUpdate();
  }

  checkRootNodeSelection(node: FieldFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  getParentNode(node: FieldFlatNode): FieldFlatNode | null {
    const currentLevel = this.getLevel(node);
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];
      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  private emitUpdate() {
    this.filterArray = [];
    this.checklistSelection.selected.forEach(_ => {
      //output string array with selected node
      this.filterArray.push(_.label.replace(/\s/g, '').toLowerCase());
    })
    this.change.emit(this.filterArray);
  }
}
