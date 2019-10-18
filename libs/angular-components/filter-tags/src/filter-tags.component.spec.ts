import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTagsComponent } from './filter-tags.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatChipsModule, MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('FilterTagsModule', () => {
  let component: FilterTagsComponent;
  let fixture: ComponentFixture<FilterTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTagsComponent],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        MatIconModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
