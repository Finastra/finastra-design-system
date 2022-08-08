const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = path.resolve(__dirname, './src/user-profile.ts'),
config.output = {
    filename: 'fds-user-profile.js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;
