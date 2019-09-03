import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchOverlayComponent } from './global-search-overlay.component';
import { GlobalSearchModule } from '../../global-search.module';

// TODO: Fix this test
describe('GlobalSearchOverlayComponent', () => {
  let component: GlobalSearchOverlayComponent;
  let fixture: ComponentFixture<GlobalSearchOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GlobalSearchModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
