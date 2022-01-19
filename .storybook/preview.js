import themeLight from './theme-light';
import themeDark from './theme-dark';
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
  darkMode: {
    current: isDark ? "dark" : "light",
    // Override the default dark theme
    dark: { ...themeDark },
    // Override the default light theme
    light: { ...themeLight },
    darkClass: 'dark-theme',
    lightClass: 'light-theme',
    stylePreview: true,
  }
};
