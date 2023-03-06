const path = require('path');
const config = require('../base-webpack.config.cjs');

(config.entry = path.resolve(__dirname, './src/chip.ts')),
  (config.output = {
    filename: 'fds-chip.js',
    path: path.resolve(__dirname, 'dist')
  }),
  (module.exports = config);
