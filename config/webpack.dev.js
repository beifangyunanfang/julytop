/**
 * Created by v_liukai01 on 2019/4/18.
 */

const path = require("path");

const merge = require('webpack-merge');//webpack配置文件合并

const baseConfig = require("./webpack.base.js");//基础配置
let config = {

    mode: 'development',

    devServer: {

        contentBase: path.resolve(__dirname, '../dist'), // 用来指定被访问html页面所在目录的
        // publicPath: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        port: 8888,
        open: true,   // 浏览器自动打开
        // historyApiFallback: {
        //     index: 'index.html'
        // }
        hot: true,
        // inline: true

    }

};

module.exports = merge(baseConfig, config);