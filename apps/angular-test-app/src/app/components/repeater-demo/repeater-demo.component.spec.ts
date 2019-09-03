import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterDemoComponent } from './repeater-demo.component';

describe('RepeaterDemoComponent', () => {
  let component: RepeaterDemoComponent;
  let fixture: ComponentFixture<RepeaterDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeaterDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeaterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
