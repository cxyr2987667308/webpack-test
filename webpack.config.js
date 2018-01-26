const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name]-[chunkhash].js',
        publicPath: 'http://cdn.com/'  // 线上路径
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'a.html',  // -[hash]
            template: 'index.html',
            inject: false, // 'head' 'body', 
            title: 'this is a.html',
            // chunks: ['main', 'a']  // 包含文件
            excludeChunks: ['b', 'c']  // 排除在外的文件
        }),
        new HtmlWebpackPlugin({
            filename: 'b.html',  // -[hash]
            template: 'index.html',
            inject: false, // 'head' 'body', 
            title: 'this is b.html',
            // chunks: ['b']  // 包含文件
            excludeChunks: ['a', 'c']  // 排除在外的文件
        }),
        new HtmlWebpackPlugin({
            filename: 'c.html',  // -[hash]
            template: 'index.html',
            inject: false, // 'head' 'body', 
            title: 'this is c.html',
            // chunks: ['c']  // 包含文件
            excludeChunks: ['a', 'b']  // 排除在外的文件
        })
    ]
}