import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { UXGFilter } from './filter.models';

@Component({
  selector: 'uxg-dummy-component',
  template: '<h1>Dummy component</h1>'
})
class DummyComponent extends UXGFilter<string> {}

describe('FilterTreeModule', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });
});
