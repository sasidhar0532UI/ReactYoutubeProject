var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/app');
var BUILD_DIR = path.resolve(__dirname, 'src/public');

var config = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};

module.exports = config;