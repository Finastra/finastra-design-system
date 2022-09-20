import { Placement } from '@popperjs/core';

export interface TourStep {
  selector?: string;
  title: string;
  description?: string;
  placement?: Placement;
  margin?: number;
  radius?: number;
  offsetX?: number;
  offsetY?: number;
}

export interface Tour {
  stepInfo?: string;
  steps: TourStep[];
}
