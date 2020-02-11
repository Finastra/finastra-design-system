import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTagsComponent } from './filter-tags.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('FilterTagsModule', () => {
  let component: FilterTagsComponent;
  let fixture: ComponentFixture<FilterTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTagsComponent],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        MatIconModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(FilterTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
