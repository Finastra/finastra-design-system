import { async, TestBed } from '@angular/core/testing';
import { WizardModule } from './wizard.module';

describe('WizardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WizardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WizardModule).toBeDefined();
  });
});
