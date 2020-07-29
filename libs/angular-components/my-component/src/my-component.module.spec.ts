import { async, TestBed } from '@angular/core/testing';
import { MyComponentModule } from './my-component.module';

describe('MyComponentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyComponentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyComponentModule).toBeDefined();
  });
});
