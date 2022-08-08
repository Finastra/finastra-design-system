const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/menu-trigger.ts'),
config.output = {
    filename: 'fds-menu-trigger.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;