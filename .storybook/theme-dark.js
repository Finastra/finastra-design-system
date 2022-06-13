import { create } from '@storybook/theming';
import baseTheme from './theme-base';

export default create({
  base: 'dark',
  ...baseTheme,

  colorPrimary: '#E453BF',
  colorSecondary: '#917EE0',

  // UI
  appBg: '#191919'
});
