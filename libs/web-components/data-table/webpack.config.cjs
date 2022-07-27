const path = require('path');
const config = require('../base-webpack.config.cjs');

config.entry = {
    'data-table': path.resolve(__dirname, './src/data-table.ts'),
    'data-table-pagination': path.resolve(__dirname, './src/pagination/data-table-pagination.ts'),
    'data-table-with-pagination': path.resolve(__dirname, './src/data-table-with-pagination.ts'),
},
config.output = {
    filename: 'fds-[name].js',
    path: path.resolve(__dirname, 'dist'),
},

module.exports = config;