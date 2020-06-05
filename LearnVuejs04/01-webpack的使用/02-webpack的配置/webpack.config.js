const path=require('path')

module.exports={
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    path:path.resolve(__dirname,'dist'),//动态获取路径
    filename:'bundle.js'
  }
}