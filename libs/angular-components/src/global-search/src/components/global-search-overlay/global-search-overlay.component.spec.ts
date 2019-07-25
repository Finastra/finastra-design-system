import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchOverlayComponent } from './global-search-overlay.component';

describe('GlobalSearchOverlayComponent', () => {
  let component: GlobalSearchOverlayComponent;
  let fixture: ComponentFixture<GlobalSearchOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSearchOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
