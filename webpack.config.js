var path = require('path');

module.exports = {
    entry: './source',
    output: {
        path: 'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            include: path.resolve(__dirname, 'source'),
            query: {
                presets: ['es2015']
            }
        }]
    }
};
