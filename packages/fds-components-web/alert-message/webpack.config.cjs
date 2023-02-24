const path = require('path');
const config = require('../base-webpack.config.cjs');

(config.entry = path.resolve(__dirname, './src/alert-message.ts')),
  (config.output = {
    filename: 'fds-alert-message.js',
    path: path.resolve(__dirname, 'dist')
  }),
  (module.exports = config);
