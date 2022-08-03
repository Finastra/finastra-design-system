const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/account-card.ts'),
config.output = {
    filename: 'fds-account-card.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;