import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonViewComponent } from './json-view.component';

describe('JsonViewModule', () => {
  let component: JsonViewComponent;
  let fixture: ComponentFixture<JsonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JsonViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
