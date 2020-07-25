module.exports = config => {
  config.module.rules.push({
    test: /tailwind\.scss$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: [require('tailwindcss')('./themes/tailwind-theme/tailwind.config.js'), require('autoprefixer')]
        }
      }
    ]
  });
  return config;
};
