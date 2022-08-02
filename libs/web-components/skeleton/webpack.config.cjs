const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/skeleton.ts'),
config.output = {
    filename: 'fds-skeleton.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;