import { create } from '@storybook/theming';
import baseTheme from './theme-base';

export default create({
  base: 'dark',
  ...baseTheme,

  brandImage: 'https://res.cloudinary.com/ffdc/image/upload/v1664522645/finastra_logo_sb_dark_ctplcv.png',

  colorPrimary: '#E453BF',
  colorSecondary: '#917EE0',

  // UI
  appBg: '#191919'
});
