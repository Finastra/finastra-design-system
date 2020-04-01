import { async, TestBed } from '@angular/core/testing';
import { JsonEditorModule } from './json-editor.module';

describe('JsonEditorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JsonEditorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(JsonEditorModule).toBeDefined();
  });
});
