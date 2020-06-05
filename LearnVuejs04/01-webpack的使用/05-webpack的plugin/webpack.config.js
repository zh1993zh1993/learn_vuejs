const path=require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyjsWebpack=require('uglifyjs-webpack-plugin')
module.exports={
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    //为了在URL前面加上对应的路径
    // publicPath:'dist/'
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        // 'css-loader':只负责将css文件进行加载
        //'style-loader':负责将样式添加到DOM中
        //使用打个loader时，是从右向左
        use: [ 'style-loader' ,'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit时，会将图片编译成base64字符串形式
              //当加载的图片，大于limit时，需要使用file-loader模块进行加载
              limit: 8196,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // exclude：排除 include：包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']

      }
    ]
      },
  resolve:{
    // alias:别名
    extensions:['.js','.css','.vue'],
    alias:{
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins:[
      new webpack.BannerPlugin('最终版权归zh所有'),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
    //  开发阶段不建议丑化js代码，打包时才会用
    new UglifyjsWebpack()
  ],
  //服务器的搭建：命令：webpack-dev-server（全局安装，安装时后面加的-g）
  // 跑本地服务器命令：npm run dev  ctrl+c终止本地服务器操作
  devServer:{
    // 为哪一个文件夹提供本地服务，默认是根文件
    contentBase:'./dist',
    // 页面实时刷新
    inline:true
  }
}