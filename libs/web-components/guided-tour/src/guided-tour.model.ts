import { Placement } from '@floating-ui/dom';

export interface TourStep {
  selector?: string;
  title: string;
  description?: string;
  placement?: Placement;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  radius?: number;
  mainAxis?: number;
  crossAxis?: number;
}

export interface Tour {
  stepInfo?: string;
  steps: TourStep[];
}
