import { Input, Component } from '@angular/core';

@Component({
  selector: 'uxg-legend',
  template: ''
})
export class LegendComponent {
  @Input() position: LegendPosition;

  constructor() {
    this.position = LegendPosition.verticalRightTop;
  }

  getLegendPlotly() {
    return LegendPositionConvertion[this.position] ? LegendPositionConvertion[this.position] : {};
  }
}

export enum LegendPosition {
  verticalLeftCenter = 'verticalLeftCenter',
  verticalLeftTop = 'verticalLeftTop',
  verticalLeftBottom = 'verticalLeftBottom',
  verticalRightCenter = 'verticalRightCenter',
  verticalRightTop = 'verticalRightTop',
  verticalRightBottom = 'verticalRightBottom',
  horizontalTopCenter = 'horizontalTopCenter',
  horizontalTopLeft = 'horizontalTopLeft',
  horizontalTopRight = 'horizontalTopRight',
  horizontalBottomCenter = 'horizontalBottomCenter',
  horizontalBottomLeft = 'horizontalBottomLeft',
  horizontalBottomRight = 'horizontalBottomRight'
}

export const LegendPositionConvertion: Record<LegendPosition, {}> = {
  [LegendPosition.verticalLeftTop]: {
    label: 'Vertical left top',
    orientation: 'v',
    x: -0.1,
    y: 1
  },
  [LegendPosition.verticalLeftCenter]: {
    label: 'Vertical left center',
    orientation: 'v',
    x: -0.1,
    y: 0.5
  },
  [LegendPosition.verticalLeftBottom]: {
    label: 'Vertical left bottom',
    orientation: 'v',
    x: -0.1,
    y: 0
  },
  [LegendPosition.verticalRightTop]: {
    label: 'Vertical right top',
    orientation: 'v'
  },
  [LegendPosition.verticalRightCenter]: {
    label: 'Vertical right center',
    orientation: 'v',
    x: 1,
    y: 0.5
  },
  [LegendPosition.verticalRightBottom]: {
    label: 'Vertical right bottom',
    orientation: 'v',
    x: 1,
    y: 0
  },
  [LegendPosition.horizontalBottomLeft]: {
    label: 'Horizontal bottom left',
    orientation: 'h',
    x: 0,
    y: -0.1,
    xanchor: 'left'
  },
  [LegendPosition.horizontalBottomCenter]: {
    label: 'Horizontal bottom center',
    orientation: 'h',
    x: 0.5,
    y: -0.1,
    xanchor: 'center'
  },
  [LegendPosition.horizontalBottomRight]: {
    label: 'Horizontal bottom right',
    orientation: 'h',
    x: 1,
    y: -0.1,
    xanchor: 'right'
  },
  [LegendPosition.horizontalTopLeft]: {
    label: 'Horizontal top left',
    orientation: 'h',
    x: 0,
    y: 1.1,
    xanchor: 'left'
  },
  [LegendPosition.horizontalTopCenter]: {
    label: 'Horizontal top center',
    orientation: 'h',
    x: 0.5,
    y: 1.1,
    xanchor: 'center'
  },
  [LegendPosition.horizontalTopRight]: {
    label: 'Horizontal top right',
    orientation: 'h',
    x: 1.02,
    y: 1.1,
    xanchor: 'right'
  }
};
