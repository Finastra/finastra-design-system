import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ExpandableTableComponent } from './expandable-table.component';
import { SimpleChange, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { UxgTableModule } from '@finastra/angular-components/table';
import { cloneDeep } from 'lodash';

export const DATASOURCE = [
  { apiGroup: 'FX Rate', api: 'Rate Changed', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  { apiGroup: 'FX Rate', api: 'Balance Changed', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  { apiGroup: 'FX Rate', api: 'Paymen refused', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  {
    apiGroup: 'Countries',
    api: 'Located country',
    description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit'
  },
  { apiGroup: 'Countries', api: 'Nuke country', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  { apiGroup: 'Countries', api: 'Erase country', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' }
];

export const COLUMNS = [
  { displayName: 'API Group', name: 'apiGroup' },
  { displayName: 'API', name: 'api' },
  { displayName: 'Description', name: 'description' }
];

export const GROUP_BY_KEY = 'apiGroup';

fdescribe('ExpandableTableComponent', () => {
  let component: ExpandableTableComponent;
  let fixture: ComponentFixture<ExpandableTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ExpandableTableComponent],
        imports: [
          MatProgressBarModule,
          MatButtonModule,
          MatExpansionModule,
          MatIconModule,
          MatInputModule,
          MatFormFieldModule,
          BrowserAnimationsModule,
          MatTableModule,
          MatCheckboxModule,
          MatDialogModule,
          UxgTableModule
        ]
      })
        .overrideComponent(ExpandableTableComponent, {
          set: { changeDetection: ChangeDetectionStrategy.Default }
        })
        .compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableTableComponent);
    component = fixture.componentInstance;
    component.selectable = true;
    fixture.detectChanges();
  });

  it('should instantiate but empty', () => {
    const table = fixture.debugElement.query(By.css('.mat-accordion'));
    expect(table).toBeFalsy();
  });

  it('should instantiate and contains a table', () => {
    component.dataSource = DATASOURCE;
    component.columns = COLUMNS;
    component.groupByKey = GROUP_BY_KEY;
    component.ngOnChanges({
      dataSource: new SimpleChange(null, component.dataSource, true),
      columns: new SimpleChange(null, component.columns, true),
      groupByKey: new SimpleChange(null, component.groupByKey, true)
    });
    fixture.detectChanges();

    const table = fixture.debugElement.query(By.css('.mat-accordion'));
    expect(table).toBeTruthy();
  });

  it('should instantiate and contains a table with 6 checkboxes', () => {
    component.dataSource = DATASOURCE;
    component.columns = COLUMNS;
    component.groupByKey = GROUP_BY_KEY;
    component.selectable = true;
    component.ngOnChanges({
      dataSource: new SimpleChange(null, component.dataSource, true),
      columns: new SimpleChange(null, component.columns, true),
      groupByKey: new SimpleChange(null, component.groupByKey, true)
    });

    fixture.detectChanges();

    const checkboxes = fixture.debugElement.nativeElement.querySelectorAll('.mat-checkbox');
    expect(checkboxes.length).toEqual(11);
  });

  it('should toggle all  and reuturn all the data', () => {
    component.dataSource = DATASOURCE;
    component.columns = COLUMNS;
    component.groupByKey = GROUP_BY_KEY;
    component.selectable = true;

    component.ngOnChanges({
      dataSource: new SimpleChange(null, component.dataSource, true),
      columns: new SimpleChange(null, component.columns, true),
      groupByKey: new SimpleChange(null, component.groupByKey, true)
    });
    fixture.detectChanges();

    spyOn(component.selectionChange, 'emit');
    component.toggleAll();

    expect(component.selectionChange.emit).toHaveBeenCalled();
    expect(component.isAllSelected()).toEqual(true);
  });

  it('should toggle a row and return all row data', () => {
    component.dataSource = DATASOURCE;
    component.columns = COLUMNS;
    component.selectable = true;
    component.groupByKey = GROUP_BY_KEY;
    component.ngOnChanges({
      dataSource: new SimpleChange(null, component.dataSource, true),
      columns: new SimpleChange(null, component.columns, true),
      groupByKey: new SimpleChange(null, component.groupByKey, true)
    });
    fixture.detectChanges();

    const row = cloneDeep(component._dataSource[0]);

    row.values.forEach((val: any) => {
      delete val.primaryKey;
    });
    spyOn(component.selectionChange, 'emit');
    component.toggleRow(row);

    expect(component.selectionChange.emit).toHaveBeenCalledWith(row.values);
    expect(component.isRowAllSelected(row)).toEqual(true);
  });

  it('should emit an event when checkbox is clicked', () => {
    component.dataSource = DATASOURCE;
    component.columns = COLUMNS;
    component.selectable = true;
    component.groupByKey = GROUP_BY_KEY;
    component.ngOnChanges({
      dataSource: new SimpleChange(null, component.dataSource, true),
      columns: new SimpleChange(null, component.columns, true),
      groupByKey: new SimpleChange(null, component.groupByKey, true),
      selectable: new SimpleChange(null, component.selectable, true)
    });
    fixture.detectChanges();

    const checkboxes = fixture.debugElement.nativeElement.querySelectorAll('.mat-checkbox');

    const checkbox = checkboxes[3];

    spyOn(component.selectionChange, 'emit');
    checkbox.dispatchEvent(new Event('change'));

    const expectedObj = cloneDeep(DATASOURCE[0]) as any;
    delete expectedObj.primaryKey;
    expect(component.selectionChange.emit).toHaveBeenCalledWith([expectedObj]);
  });
});
