const path = require('path');

module.exports = {
    entry: './index.jsx',
    mode: 'development',
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
};