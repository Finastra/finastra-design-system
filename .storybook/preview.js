import theme from './theme';
import '../themes/fds-theme/prebuilt/all-themes.css';

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
  }
};
