import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCategoryComponent } from './icon-category.component';
import { MatIconModule } from '@angular/material/icon';

describe('IconCategoryComponent', () => {
  let component: IconCategoryComponent;
  let fixture: ComponentFixture<IconCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
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
