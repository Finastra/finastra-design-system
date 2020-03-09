import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonTextComponent } from './skeleton-text.component';

describe('SkeletonTextModule', () => {
  let component: SkeletonTextComponent;
  let fixture: ComponentFixture<SkeletonTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
