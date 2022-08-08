const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/app-card.ts'),
config.output = {
    filename: 'fds-app-card.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;