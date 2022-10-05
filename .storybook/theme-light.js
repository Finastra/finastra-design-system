import { create } from '@storybook/theming';
import baseTheme from './theme-base';

export default create({
  base: 'light',
  ...baseTheme,

  brandImage: 'https://res.cloudinary.com/ffdc/image/upload/v1664522565/finastra_logo_sb_light_otxydh.png',

  colorPrimary: '#C137A2',
  colorSecondary: '#694ED6',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF'
});
