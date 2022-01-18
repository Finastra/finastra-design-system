module.exports = {
  stories: ['../libs/web-components/**/stories/*.stories.{js,md,mdx}', '../themes/fds-theme/**/*.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5'
  }
};
