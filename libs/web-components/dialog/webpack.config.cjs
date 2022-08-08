const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/dialog.ts'),
config.output = {
    filename: 'fds-dialog.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;