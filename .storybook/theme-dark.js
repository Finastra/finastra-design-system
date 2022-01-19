import { create } from '@storybook/theming';
import baseTheme from './theme-base';

export default create({
    base: 'dark',
    ...baseTheme,

    brandImage: 'https://res.cloudinary.com/ffdc/image/upload/c_scale,w_350/v1634050263/finastra_logo_rgb_rev.png',

    colorPrimary: '#E453BF',
    colorSecondary: '#917EE0',

    // UI
    appBg: '#191919'
  });