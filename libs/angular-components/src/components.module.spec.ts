import { async, TestBed } from '@angular/core/testing';
import { ComponentsModule } from './components.module';

describe('ComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ComponentsModule).toBeDefined();
  });
});
