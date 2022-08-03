const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/search-input.ts'),
config.output = {
    filename: 'fds-search-input.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;