const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/button-toggle-group.ts'),
config.output = {
    filename: 'fds-button-toggle-group.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;