import theme from './theme';

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
