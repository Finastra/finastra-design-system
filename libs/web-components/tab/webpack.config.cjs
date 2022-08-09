const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/tab.ts'),
config.output = {
    filename: 'fds-tab.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;
