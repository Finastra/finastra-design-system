module.exports = {
  stories: ['../libs/web-components/**/stories/*.stories.{ts,js,md,mdx}', '../themes/fds-theme/**/*.stories.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode', '@storybook/preset-scss'],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5'
  }
};
