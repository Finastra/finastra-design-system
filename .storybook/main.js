module.exports = {
  stories: ['../libs/web-components/**/stories/*.stories.{ts,js,md,mdx}', '../themes/fds-theme/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
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
      '**/libs/web-components/**/src/**.css.ts',
      '**/libs/web-components/**/src/**.scss',
      '**/libs/web-components/**/src/**.ts'
    ];
    return config;
  }
};
