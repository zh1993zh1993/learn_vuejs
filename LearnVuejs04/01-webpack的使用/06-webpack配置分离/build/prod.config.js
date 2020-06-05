const UglifyjsWebpack=require('uglifyjs-webpack-plugin')
const webpackMerge=require('webpack-merge')
const baseConfig=require('./base.config')
module.exports=webpackMerge(baseConfig,{
  plugins:[
    //  开发阶段不建议丑化js代码，打包时才会用
    new UglifyjsWebpack()
  ]
})
