import {Breakpoints} from '@angular/cdk/layout';
export const gridDefinitions = {
  'Small': {
    cols: 4,
    gutter: 16,
    breakpoints: [Breakpoints.XSmall]
  },
  'Medium': {
    cols: 8,
    gutter: 16,
    breakpoints: [Breakpoints.Small]
  },
  'Large': {
    cols: 12,
    gutter: 24,
    breakpoints: [Breakpoints.Medium]
  }
}
