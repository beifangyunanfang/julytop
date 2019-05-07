/**
 * Created by v_liukai01 on 2019/4/18.
 */
const merge = require('webpack-merge');//webpack配置文件合并

const baseConfig = require("./webpack.base.js");//基础配置


let config = {

    mode: 'production',
    // 提取公共模块，包括第三方库和自定义工具库等
    // optimization: {
    //     // // 找到chunk中共享的模块,取出来生成单独的chunk
    //     // splitChunks: {
    //     //     chunks: "all",  // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
    //     //     cacheGroups: {
    //     //         vendors: {  // 抽离第三方插件
    //     //             test: /[\\/]node_modules[\\/]/,     // 指定是node_modules下的第三方包
    //     //             name: "vendors",
    //     //             priority: -10                       // 抽取优先级
    //     //         },
    //     //         utilCommon: {   // 抽离自定义工具库
    //     //             name: "common",
    //     //             minSize: 0,     // 将引用模块分离成新代码文件的最小体积
    //     //             minChunks: 2,   // 表示将引用模块如不同文件引用了多少次，才能分离生成新chunk
    //     //             priority: -20
    //     //         }
    //     //     }
    //     // },
    //     // // 为 webpack 运行时代码创建单独的chunk
    //     // runtimeChunk:{
    //     //     name:'manifest'
    //     // }
    //     // splitChunks: {
    //     //     chunks: "all",
    //     //     maxSize: 80000,
    //     //     minSize: 20000,
    //     //     cacheGroups: {
    //     //         vendor: {
    //     //             test: /[\\/]node_modules[\\/]/,
    //     //             name: "vendor",
    //     //             chunks: "all",
    //     //             minSize:20000
    //     //         },
    //     //     }
    //     // }
    //     // 抽离webpack runtime到单文件
    //     runtimeChunk: "single",
    //     splitChunks: {
    //         chunks: "all",
    //         // 最大初始请求数量
    //         maxInitialRequests: Infinity,
    //         // 抽离体积大于80kb的chunk
    //         minSize: 80 * 1024,
    //         // 抽离被多个入口引用次数大于等于1的chunk
    //         minChunks: 1,
    //         cacheGroups: {
    //             // 抽离node_modules下面的第三方库
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 // 从模块的路径地址中获得库的名称
    //                 name: "vendor"
    //             }
    //         }
    //     }
    // },
    // optimization: {
    //     //包清单
    //     runtimeChunk: {
    //         name: "manifest"
    //     },
    //     //拆分公共包
    //     splitChunks: {
    //         cacheGroups: {
    //             //项目公共组件
    //             common: {
    //                 chunks: "initial",
    //                 name: "common",
    //                 minChunks: 2,
    //                 maxInitialRequests: 5,
    //                 minSize: 0
    //             },
    //             //第三方组件
    //             vendor: {
    //                 test: /node_modules/,
    //                 chunks: "initial",
    //                 name: "vendor",
    //                 priority: 10,
    //                 enforce: true
    //             }
    //         }
    //     }
    // },
};


module.exports = merge(baseConfig, config);