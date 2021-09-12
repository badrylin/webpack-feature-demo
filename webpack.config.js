const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const path = require('path');

const config = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, './dist/index.html'),
            template: path.resolve(__dirname, './src/index.html'),
            inject: true,
            minify: false,
        }),

    ]
}

module.exports = new SpeedMeasurePlugin().wrap(config)