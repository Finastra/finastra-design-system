import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LegendComponent, LegendPositionConvertion, LegendPosition } from './legend.component';

describe('Legend Directive', () => {
  let component: LegendComponent;
  let fixture: ComponentFixture<LegendComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LegendComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default position', () => {
    const dummyLegend = LegendPositionConvertion[LegendPosition.verticalRightTop];

    expect(component.getLegendPlotly()).toEqual(dummyLegend);
  });

  it('should change the position', () => {
    let dummyLegend = LegendPositionConvertion[LegendPosition.verticalRightTop];

    expect(component.getLegendPlotly()).toEqual(dummyLegend);

    component.position = LegendPosition.horizontalBottomLeft;

    dummyLegend = LegendPositionConvertion[LegendPosition.horizontalBottomLeft];

    expect(component.getLegendPlotly()).toEqual(dummyLegend);
  });
});
