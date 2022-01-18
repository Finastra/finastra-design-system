import { themes } from '@storybook/theming';
import theme from './theme';
import './all-themes.scss';

const isDark =
    typeof window !== `undefined`
        ? window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        : null

export const parameters = {
  layout: 'centered',
  options: {
    storySort: {
      order: ['Foundations', 'Components'],
      method: 'alphabetical'
    }
  },
  docs: {
    theme: theme
  },
  darkMode: {
    current: isDark ? "dark" : "light",
    // Override the default dark theme
    dark: { ...themes.dark, appBg: '#191919' },
    // Override the default light theme
    light: { ...themes.normal },
    darkClass: 'dark-theme',
    lightClass: 'light-theme',
    stylePreview: true,
  }
};
