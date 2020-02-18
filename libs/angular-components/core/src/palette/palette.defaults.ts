import { PaletteConfig } from './palette.models';

export const PALETTE_DEFAULT_CONFIG: PaletteConfig = {
  colorWay: ['#694ED6', '#C137A2', '#E40046', '#56C271', '#FF8A3D', '#D2D755', '#F0B323', '#5BC1D7'],
  colorScale: [
    // reversed due to a plotly bug
    [0, 'rgb(73, 54, 150)'],
    [0.1, 'rgb(73, 54, 150)'],
    [0.3, 'rgb(105, 78, 214)'],
    [0.5, 'rgb(143, 123, 225)'],
    [0.6, 'rgb(180, 166, 234)'],
    [0.7, 'rgb(217, 211, 245)'],
    [1, 'rgb(206, 206, 206)']
  ],
  vectorMap: {
    marker: {
      line: {
        color: '#fff',
        width: 0.5
      }
    }
  }
};
