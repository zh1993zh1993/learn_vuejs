const webpackMerge=require('webpack-merge')
const baseConfig=require('./base.config')
module.exports=webpackMerge(baseConfig,{
  devServer:{
    // 为哪一个文件夹提供本地服务，默认是根文件
    contentBase:'./dist',
    // 页面实时刷新
    inline:true
  }
})