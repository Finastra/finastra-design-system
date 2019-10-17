import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTagsComponent } from './filter-tags.component';

describe('FilterTagsModule', () => {
  let component: FilterTagsComponent;
  let fixture: ComponentFixture<FilterTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTagsComponent]
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
