export const PALETTE_CONFIG = 'PALETTE_CONFIG';

export interface PaletteConfig {
  colorScale: ColorScale;
  colorWay: Array<string>;
  vectorMap: {
    marker: {
      line: {
        color: string;
        width: number;
      };
    };
  };
}

export type ColorScale = [number, string][];
