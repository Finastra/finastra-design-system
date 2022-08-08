const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/icon-button.ts'),
config.output = {
    filename: 'fds-icon-button.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;