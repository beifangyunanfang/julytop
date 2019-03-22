const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',   //热更新
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            // js文件import css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true     //把生成的 index.html 文件的内容的没用空格去掉，减少空间
            },
            title: "webpack-study",
            hash: true,              //清缓存用
            hot: true,       //热更新
        }),
        new CleanWebpackPlugin(),         //实例化，不加参数，清除多余参数
        new webpack.HotModuleReplacementPlugin()      //热更新
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),   //指定打开的页面
        host: 'localhost',
        compress: true,
        port: 8888
    }
}