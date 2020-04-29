import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCategoryComponent } from './icon-category.component';

describe('IconCategoryComponent', () => {
  let component: IconCategoryComponent;
  let fixture: ComponentFixture<IconCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconCategoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
