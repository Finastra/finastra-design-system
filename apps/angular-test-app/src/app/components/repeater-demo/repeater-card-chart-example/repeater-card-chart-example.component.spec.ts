import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeaterCardChartExampleComponent } from './repeater-card-chart-example.component';

describe('RepeaterCardChartExampleComponent', () => {
  let component: RepeaterCardChartExampleComponent;
  let fixture: ComponentFixture<RepeaterCardChartExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepeaterCardChartExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepeaterCardChartExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
