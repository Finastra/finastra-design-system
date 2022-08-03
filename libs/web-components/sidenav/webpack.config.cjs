const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/sidenav.ts'),
config.output = {
    filename: 'fds-sidenav.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;