import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoComponent } from './popover-demo.component';
import { PopoverModule } from '@finastra/angular-components/popover';

describe('PopoverDemoComponent', () => {
  let component: PopoverDemoComponent;
  let fixture: ComponentFixture<PopoverDemoComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [PopoverModule],
        declarations: [PopoverDemoComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
