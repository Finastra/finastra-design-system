const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/tab-bar.ts'),
config.output = {
    filename: 'fds-tab-bar.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;
