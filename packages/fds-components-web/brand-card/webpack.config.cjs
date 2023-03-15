const path = require('path');
const config = require('../base-webpack.config.cjs');

(config.entry = path.resolve(__dirname, './src/brand-card.ts')),
  (config.output = {
    filename: 'fds-brand-card.js',
    path: path.resolve(__dirname, 'dist')
  }),
  (module.exports = config);
