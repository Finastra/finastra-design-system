import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UXGChangelogComponent } from './changelog.component';

describe('UXGChangelogComponent', () => {
  let component: UXGChangelogComponent;
  let fixture: ComponentFixture<UXGChangelogComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UXGChangelogComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UXGChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
