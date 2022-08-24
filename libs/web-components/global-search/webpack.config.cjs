const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/global-search.ts'),
config.output = {
    filename: 'fds-global-search.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;