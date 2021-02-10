module.exports = (config) => {
  config.module.rules.push({
    test: /tailwind\.scss$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              require('postcss-import'),
              require('tailwindcss')('./themes/tailwind-theme/tailwind.config.js'),
              require('autoprefixer')
            ]
          }
        }
      }
    ]
  });
  return config;
};
