import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterGroupComponent } from './filter-group.component';

describe('FilterGroupComponent', () => {
  let component: FilterGroupComponent;
  let fixture: ComponentFixture<FilterGroupComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterGroupComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatBadgeModule,
        MatChipsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(FilterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear filters', () => {
    component.selectedData = [
      {
        title: 'Tags',
        selectedData: [{ label: 'TagA' }, { label: 'TreeNodeA' }]
      }
    ];
    fixture.detectChanges();
    component.clearSelection();

    expect(component.selectedData[0].selectedData).toHaveLength(0);
  });
});
