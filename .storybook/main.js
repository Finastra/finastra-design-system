module.exports = {
  stories: ['../libs/web-components/**/stories/*.stories.{ts,js,md,mdx}', '../themes/fds-theme/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/preset-scss',
    '@ljcl/storybook-addon-cssprops',
    'storybook-addon-designs'
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5'
  }
};
