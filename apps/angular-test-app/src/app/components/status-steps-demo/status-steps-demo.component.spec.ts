import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusStepsDemoComponent } from './status-steps-demo.component';

describe('StatusStepsDemoComponent', () => {
  let component: StatusStepsDemoComponent;
  let fixture: ComponentFixture<StatusStepsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusStepsDemoComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusStepsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
