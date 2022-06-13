import { create } from '@storybook/theming';
import baseTheme from './theme-base';

export default create({
  base: 'light',
  ...baseTheme,

  brandImage: 'https://res.cloudinary.com/ffdc/image/upload/c_scale,w_350/v1634050263/finastra_logo_rgb.png',

  colorPrimary: '#C137A2',
  colorSecondary: '#694ED6',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF'
});
