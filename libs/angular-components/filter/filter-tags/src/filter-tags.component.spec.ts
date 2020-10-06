import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterTagsComponent } from './filter-tags.component';
import { HighlightPipe } from './highlight.pipe';

describe('FilterTagsModule', () => {
  let component: FilterTagsComponent;
  let fixture: ComponentFixture<FilterTagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTagsComponent, HighlightPipe],
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
