const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/circular-progress.ts'),
config.output = {
    filename: 'fds-circular-progress.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;