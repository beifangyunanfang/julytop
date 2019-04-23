/**
 * Created by v_liukai01 on 2019/4/18.
 */

const path = require("path");
const webpack = require("webpack");



const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //入口文件

    // entry: {
    //     'react-hot-loader/patch',
    //     main: './src/index.js'
    //
    // },
    entry: [
        // // 开启react代码的模块热替换（HMR）
        'react-hot-loader/patch',
        // // 为webpack-dev-server的环境打包好运行代码
        // // 然后连接到指定服务器域名与端口, 这里的端口为自己项目的端口
        // 'webpack-dev-server/client?http://localhost:8888/',
        // // 为热替换（HMR）打包好运行代码
        // // only- 意味着只有成功更新运行代码才会执行热替换（HMR）
        // 'webpack/hot/only-dev-server',
        path.join(__dirname, '../src/index.js')
    ],
    //出口文件

    output: {

        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js"

    },

    module: {
        rules: [

            {

                test: /\.js$/,

                exclude: /node_modules/,

                loader: "babel-loader"

            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin(
            {
                filename: 'index.html',
                template: path.join(__dirname, '../src/index.html'),
                inject: true
            }
        ),
        // new webpack.HotModuleReplacementPlugin(),

    ]

}
