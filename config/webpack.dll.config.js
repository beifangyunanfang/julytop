/**
 * Created by v_liukai01 on 2019/5/5.
 */
// const webpack = require('webpack')
// const path = require('path')
//
// module.exports = {
//     entry: {
//         vendors: ['react','react-router-dom']
//     },
//
//     output: {
//         path: path.resolve(__dirname, '../dist'),
//         filename: `[name].dll.js`,
//         library: '[name]_library'
//     },
//
//     plugins: [
//         new webpack.DllPlugin({
//             path: path.join(__dirname, 'dist/[name]-manifest.json'),
//             // This must match the output.library option above
//             name: library
//         }),
//     ],
// }


const webpack = require('webpack');
const path = require('path')
const vendors = [
    'antd',
    'react',
    'react-dom',
    'react-router',
];

module.exports = {
    // output: {
    //     path: path.resolve(__dirname, '../dist'),
    //     filename: '[name].[chunkhash].js',
    //     library: '[name]_[chunkhash]',
    // },
    entry: {
        vendor: vendors,
    },
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "Dll.js",
        library: "[name]_[hash]"
    },
    plugins: [
        new webpack.DllPlugin({
            // path: path.resolve(__dirname, '../dist/[name]-manifest.json'),
            path: path.join(__dirname, "../dist", "manifest.json"),
            // path: 'manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname,
        }),
    ],
};