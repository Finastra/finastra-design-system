const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/wizard-page.ts'),
config.output = {
    filename: 'fds-wizard-page.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;
