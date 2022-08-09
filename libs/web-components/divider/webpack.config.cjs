const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/divider.ts'),
config.output = {
    filename: 'fds-divider.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;