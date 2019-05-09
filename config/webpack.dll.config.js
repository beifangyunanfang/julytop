/**
 * Created by v_liukai01 on 2019/5/5.
 */
const webpack = require('webpack');
const path = require('path');
const vendors = [
    'antd',
    'react',
    'react-dom',
    'react-router'
];

module.exports = {
    // output: {
    //     path: path.resolve(__dirname, '../dist'),
    //     filename: '[name].[chunkhash].js',
    //     library: '[name]_[chunkhash]',
    // },
    mode: 'development',
    entry: {
        vendor: vendors
    },
    output: {
        path: path.join(__dirname, "../dist/dll"),
        publicPath: "/assets/",
        filename: '[name].bundle.dll.js',
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            // path: path.resolve(__dirname, '../dist/[name]-manifest.json'),
            path: path.join(__dirname, "../dist/dll", "[name]-manifest.json"),
            // path: 'manifest.json',
            name: '[name]',
            context: __dirname,
        }),
    ],
};