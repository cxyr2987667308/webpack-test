const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'  // 线上路径
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index-[hash].html',
            template: 'index.html',
            inject: false, // 'head' 'body', 
            title: 'webpack is good',
            date: new Date(),
            minify: {  // 压缩
                removeComments: true,  // 删除注释
                collapseWhitespace: true  // 删除空格
            }
        })
    ]
}