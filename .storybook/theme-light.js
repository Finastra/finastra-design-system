import { create } from '@storybook/theming';
import baseTheme from './theme-base';

export default create({
  base: 'light',
  ...baseTheme,

  colorPrimary: '#C137A2',
  colorSecondary: '#694ED6',

  // UI
  appBg: '#FAFAFA',
  appContentBg: '#FFFFFF'
});
