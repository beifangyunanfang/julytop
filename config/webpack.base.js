/**
 * Created by v_liukai01 on 2019/4/18.
 */

const path = require("path");
const webpack = require("webpack");


const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        filename: "bundle.js",
        publicPath: "./"

    },

    resolve: {
        // 设置扩展，这样导入文件时可以省去写扩展名
        extensions: [".js", ".json", ".jsx"]
    },

    module: {
        rules: [

            {
                // // 对".js"或".jsx"结尾的文件使用babel-loader进行转译
                // babel-loader的配置放到".babelrc"文件内
                test: /\.jsx?$/,

                exclude: /node_modules/,

                loader: "babel-loader"
            },
            {
                // 对css文件先后使用css-loader和style-loader
                // css-loader可以将导入项目的css变为js模块
                // style-loader可以让页面打开时，利用js将css模块
                // 内的样式注入到html头部的style标签内
                test: /\.css$/,
                // use: ["style-loader", "css-loader"]
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },

            {
                // 使用file-loader来加载图片文件
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: "file-loader"
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
        // inject: true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。

        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]



}
