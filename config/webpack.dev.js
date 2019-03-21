const path = require ("path")
module.exports = {
    mode:'development',
    entry:{
        main:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'[name].bundle.js'
    },
    module:{},
    plugins:[],
    devServer:{
        contentBase:path.resolve(__dirname,'../dist'),
        host:'localhost',
        compress:true,
        port:8888
    }
}