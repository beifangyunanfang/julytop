/**
 * Created by v_liukai01 on 2019/4/18.
 */

const path = require("path");

const merge = require('webpack-merge');//webpack配置文件合并

const baseConfig = require("./webpack.base.js");//基础配置
let config = {

    mode: 'development',

    devServer: {

        contentBase: path.resolve(__dirname, '../src'), // 用来指定被访问html页面所在目录的
        // publicPath: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        host: 'localhost',
        port: 8888,
        // open: true,   // 浏览器自动打开
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        hot: true,
        // 单页应用的前端路由使用history模式时，这个配置很重要
        // webpack-dev-server服务器接受的请求路径没有匹配的资源时
        // 他会返回index.html而不是404页面
        historyApiFallback: true,
        // inline: true

    },


};

module.exports = merge(baseConfig, config);