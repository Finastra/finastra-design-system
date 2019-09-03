import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRepeaterComponent } from './component-repeater.component';

describe('ComponentRepeaterComponent', () => {
  let component: ComponentRepeaterComponent;
  let fixture: ComponentFixture<ComponentRepeaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRepeaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRepeaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
