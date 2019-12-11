import { CommonModule } from '@angular/common';
import { DebugElement, EventEmitter, SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatTreeModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterTreeComponent, TreeNode } from './filter-tree.component';

describe('FilterTreeModule', () => {
  let component: FilterTreeComponent;
  let fixture: ComponentFixture<FilterTreeComponent>;
  let expectedFilterTreeDataSource: TreeNode[];
  let filterTreeDe: DebugElement;
  let filterTreeEl: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatChipsModule,
        MatIconModule,
        MatButtonModule,
        MatTreeModule,
        MatIconModule
      ],
      declarations: [FilterTreeComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(FilterTreeComponent);
    component = fixture.componentInstance;

    filterTreeDe = fixture.debugElement.query(By.css('.filter-tree'));
    filterTreeEl = filterTreeDe.nativeElement;

    expectedFilterTreeDataSource = [
      {
        label: 'Consumer Banking',
        children: [
          {
            label: 'Alerts'
          },
          {
            label: 'Customer Management'
          },
          {
            label: 'Money Movement'
          }
        ]
      }
    ];

    component.data = expectedFilterTreeDataSource;
    component.ngOnChanges({ data: new SimpleChange(null, expectedFilterTreeDataSource, true) });
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTreeComponent);
    component = fixture.componentInstance;
    component.data = expectedFilterTreeDataSource;
    component.ngOnChanges({ data: new SimpleChange(null, expectedFilterTreeDataSource, true) });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  function flattenObject(ob) {
    const toReturn = [];
    for (const i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if (typeof ob[i] === 'object') {
        const flatObject = flattenObject(ob[i]);
        for (const x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          toReturn.push(flatObject[x]);
        }
      } else {
        toReturn.push(ob[i]);
      }
    }
    return toReturn;
  }

  it('should contain mock items', () => {
    const expectedTreeNodeItemsLabels = flattenObject(expectedFilterTreeDataSource)
      .join('')
      .replace(/\s/g, '')
      .toLowerCase();
    const treeElContent = filterTreeEl.textContent
      .replace('expand_more', '')
      .replace(/\s/g, '')
      .toLowerCase();
    expect(treeElContent).toEqual(expectedTreeNodeItemsLabels);
  });

  it('should raise selected node when clicked (triggerEventHandler)', () => {
    let selectedNodeEvent: any;
    component.changes.subscribe((event: EventEmitter<any>) => {
      selectedNodeEvent = event;
    });
    const treeNode = component.dataSource.data[0];
    component.checkListSelection.toggle(treeNode);
    filterTreeDe.triggerEventHandler('click', null);
    expect(selectedNodeEvent.added[0].label).toEqual(treeNode.label);
  });
});
