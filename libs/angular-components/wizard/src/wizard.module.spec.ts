import { waitForAsync, TestBed } from '@angular/core/testing';
import { WizardModule } from './wizard.module';

describe('WizardModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [WizardModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(WizardModule).toBeDefined();
  });
});
