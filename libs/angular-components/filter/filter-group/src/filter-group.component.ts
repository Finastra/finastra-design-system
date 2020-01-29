import { AfterViewInit, Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilterGroupDialogComponent } from './filter-group-dialog/filter-group-dialog.component';
import { UxgFilter } from './filter.directive';
import { UXGFilterChanges } from './filter.models';

export interface FilterGroupComponentData {
  title: string;
  selectedData: any[];
}
export interface SavedFilter {
  filterName: string;
  isSelected: boolean;
  filterState: FilterGroupComponentData[];
}

@Component({
  selector: 'uxg-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.scss']
})
export class FilterGroupComponent implements AfterViewInit {
  @Output() changes = new EventEmitter<UXGFilterChanges<any>>();
  @ContentChildren(UxgFilter) filterInstances!: QueryList<UxgFilter>;

  @Input() expanded = false;
  @Input() divideAtIndex: number[] = [];
  selectedData: FilterGroupComponentData[] = [];
  savedFilters: SavedFilter[] = [];
  existingFilterNames: string[] = [];
  initialState: FilterGroupComponentData[] = [];
  activeFilter: FilterGroupComponentData[] = [];
  isActive = false;
  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.filterInstances.forEach(filterInstance => {
      const instanceTitle = filterInstance.instance;
      const selected: any = {};
      selected[instanceTitle] = filterInstance.component.getState();
      this.selectedData.push({ title: instanceTitle, selectedData: [...selected[instanceTitle]] });
      this.initialState.push({ title: instanceTitle, selectedData: [...selected[instanceTitle]] });

      filterInstance.component.changes.subscribe((change: UXGFilterChanges<any>) => {
        change.instance = instanceTitle;
        this.selectedData.forEach(filter => {
          if (filter.title === change.instance) {
            filter.selectedData = filterInstance.component.getState();
          }
        });
        this.changes.emit(change);
      });
    });
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '300px';
    dialogConfig.data = {
      existingNames: this.existingFilterNames
    };

    const dialogRef = this.dialog.open(FilterGroupDialogComponent, dialogConfig);
    const state = this.getFilterStates();

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.savedFilters.forEach(filter => {
          filter.isSelected = false;
        });
        this.existingFilterNames.push(result.trim());
        this.savedFilters.push({
          filterName: result.trim(),
          filterState: state,
          isSelected: true
        });
      }
    });
  }

  selectFilter(filter: SavedFilter) {
    this.savedFilters.forEach(savedFilter => {
      if (savedFilter.filterName === filter.filterName) {
        savedFilter.isSelected = true;
      } else {
        savedFilter.isSelected = false;
      }
    });
    this.setState(filter.filterState);
  }

  applyFilters() {
    let change: UXGFilterChanges<any>;
    this.activeFilter = [];
    this.filterInstances.forEach(filterInstance => {
      const data = filterInstance.component.getState();
      this.activeFilter.push({ title: filterInstance.instance, selectedData: data });
      change = {
        instance: filterInstance.instance,
        added: data,
        removed: []
      };
      this.changes.emit(change);
    });
  }

  updateFilter() {
    const state = this.getFilterStates();
    this.savedFilters.forEach(filter => {
      if (filter.isSelected) {
        filter.filterState = state;
      }
    });
  }

  removeFilter(filter: any) {
    this.savedFilters = this.savedFilters.filter(item => item !== filter);
    this.existingFilterNames = this.existingFilterNames.filter(items => items !== filter.filterName);
  }

  clearSelection() {
    this.filterInstances.forEach(filterInstance => {
      filterInstance.component.clearSelection();
    });

    this.selectedData.forEach(instance => {
      instance.selectedData.length = 0;
    });
  }

  resetSelection() {
    this.setState(this.initialState);
  }

  getFilterStates() {
    const groupState: any = [];
    this.filterInstances.forEach(instance => {
      if (instance.component.getState) {
        groupState.push({
          title: instance.instance,
          selectedData: instance.component.getState()
        });
      }
    });
    return groupState;
  }

  getState() {
    return [...this.selectedData];
  }

  setState(data: FilterGroupComponentData[]) {
    if (data.length) {
      this.filterInstances.forEach(filterInstance => {
        for (let i = 0; i < data.length; i++) {
          if (filterInstance.instance === data[i].title && filterInstance.component.setState) {
            filterInstance.component.setState(data[i].selectedData);
          }
        }
      });

      data.forEach(obj => {
        this.selectedData.forEach(obj2 => {
          if (obj.title === obj2.title) {
            obj2.selectedData.length = 0;
            obj2.selectedData.push(...obj.selectedData);
          }
        });
      });
    }
  }

  open() {
    if (this.activeFilter.length) {
      this.setState(this.activeFilter);
      if (this.savedFilters.length) {
        for (let i = 0; i < this.savedFilters.length; i++)
          if (
            this.savedFilters[i].isSelected === true &&
            !this.checkListEquality(this.savedFilters[i].filterState, this.activeFilter)
          ) {
            this.savedFilters[i].isSelected = false;
            break;
          }
      }
    } else if (this.savedFilters.length) {
      this.setState(this.getSelectedFilterState());
    }
  }

  close() {
    if (this.activeFilter.length) {
      this.setState(this.activeFilter);
    } else if (this.savedFilters.length) {
      this.setState(this.getSelectedFilterState());
    } else {
      this.resetSelection();
    }
  }

  getSelectedFilterState(): FilterGroupComponentData[] {
    const stateArray: FilterGroupComponentData[] = [];
    this.savedFilters.forEach(filter => {
      if (filter.isSelected) {
        for (const key in filter.filterState) {
          if (filter.filterState.hasOwnProperty(key)) stateArray.push(filter.filterState[key]);
        }
      }
    });
    return stateArray;
  }

  checkIsActive() {
    if (this.selectedData.length && this.activeFilter.length) {
      return this.checkListEquality(this.activeFilter, this.selectedData);
    }
  }

  checkListEquality(listA: FilterGroupComponentData[], listB: FilterGroupComponentData[]) {
    for (let i = 0; i < listA.length; i++) {
      if (listA[i].title === listB[i].title && listA[i].selectedData.length === listB[i].selectedData.length) {
        for (let j = 0; j < listA[i].selectedData.length; j++) {
          if (listB[i].selectedData.indexOf(listA[i].selectedData[j]) === -1) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return true;
  }

  checkDivider(index: number) {
    if (this.divideAtIndex.indexOf(index) >= 0) {
      return true;
    } else {
      return false;
    }
  }
}
