module.exports = {
  stories: ['../libs/web-components/**/stories/*.stories.{js,md,mdx}', '../themes/fds-theme/**/*.mdx'],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/web-components",
  core: {
    builder: "webpack5"
  }
};
