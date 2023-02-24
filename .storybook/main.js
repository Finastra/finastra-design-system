module.exports = {
  stories: ['../packages/fds-components-web/**/stories/*.stories.{ts,js,md,mdx}', '../packages/fds-theme-web/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    'storybook-dark-mode',
    'storybook-addon-designs',
    '@storybook/preset-scss',
    '@ljcl/storybook-addon-cssprops',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/web-components',
  core: {
    builder: 'webpack5'
  },
  webpackFinal: async (config) => {
    config.watchOptions.ignored = [
      '**/packages/fds-components-web/**/src/**.css.ts',
      '**/packages/fds-components-web/**/src/**.scss',
      '**/packages/fds-components-web/**/src/**.ts'
    ];
    return config;
  }
};
