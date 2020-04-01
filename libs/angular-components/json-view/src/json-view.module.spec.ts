import { async, TestBed } from '@angular/core/testing';
import { JsonViewModule } from './json-view.module';

describe('JsonViewModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JsonViewModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(JsonViewModule).toBeDefined();
  });
});
