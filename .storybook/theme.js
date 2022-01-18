import { create } from '@storybook/theming';

export default create({
  base: 'light',

  brandTitle: 'Finastra',
  brandUrl: 'https://design.fusionfabric.cloud/',
  brandImage: 'https://res.cloudinary.com/ffdc/image/upload/c_scale,w_350/v1634050263/finastra_logo_rgb.png',

  colorPrimary: '#C137A2',
  colorSecondary: '#694ED6',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',
});
