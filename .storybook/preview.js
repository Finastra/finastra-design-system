import { themes } from '@storybook/theming';
import theme from './theme';
import '../themes/fds-theme/prebuilt/all-themes.css';
import './all-themes.scss';
import addons from '@storybook/addons';

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


// get an instance to the communication channel for the manager and preview
const channel = addons.getChannel();

channel.on('DARK_MODE', (isDark) => {
  if (isDark) {
    console.log('dark')
  } else {
    console.log('light')
  }
});