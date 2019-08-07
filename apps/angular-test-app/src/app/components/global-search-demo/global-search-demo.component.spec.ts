import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchDemoComponent } from './global-search-demo.component';

describe('GlobalSearchDemoComponent', () => {
  let component: GlobalSearchDemoComponent;
  let fixture: ComponentFixture<GlobalSearchDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSearchDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
