const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/linear-progress.ts'),
config.output = {
    filename: 'fds-linear-progress.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;