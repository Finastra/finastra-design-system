import { async, TestBed } from '@angular/core/testing';
import { ToasterModule } from './toaster.module';

describe('ToasterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToasterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ToasterModule).toBeDefined();
  });
});
