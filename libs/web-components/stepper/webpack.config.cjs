const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = {
    'horizontal-stepper': path.resolve(__dirname, './src/horizontal-stepper.ts'),
    'vertical-stepper': path.resolve(__dirname, './src/vertical-stepper.ts'),
},
config.output = {
    filename: 'fds-[name].js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;
