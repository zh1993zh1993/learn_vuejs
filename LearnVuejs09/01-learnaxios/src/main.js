import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// axios 网络请求方式一:基本请求
/*
axios({
  // 这个服务器不支持post请求
  url:'http://123.207.32.32:8000/home/multidata',
  method:'get'
}).then(res=>{
  console.log(res);
})*/
/*
axios({
  url:'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接
  params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  console.log(res);
})
*/

// 2.axios发送并发请求
/*
axios.all([axios({
  url:'http://123.207.32.32:8000/home/multidata'
}),axios({
  url:'http://123.207.32.32:8000/home/data',
  params:{
    type:'sell',
    page:5
  }
})])
  .then(results =>{
    console.log(results);
  })*/
//axios 使用全局的配置在进行网络请求
/*
axios.defaults.baseURL='http://123.207.32.32:8000'
// 超过请求时间：timeout是毫秒
axios.defaults.timeout=5000
// spread:将数组分别展开
axios.all([axios({
  url:'/home/multidata'
}),axios({
  url:'/home/data',
  params:{
    type:'sell',
    page:5
  }
})])
  .then(axios.spread((res1,res2)=>{
    console.log(res1);
    console.log(res2);
  }))

axios({
  url:'/category    '
})*/
// axios 网络请求方式二
// axios.get()

// 创建对应的axios的实例,每一个实例都有独立的配置
/*
const instance1= axios.create({
  baseURL:'http://123.207.32.32:8000',
  timeout:5000
})
instance1({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
})
instance1({
  url:'/home/data',
  params:{
    type:'sell',
    page:5
  }
}).then(res=>{
  console.log(res);
})*/
// 封装request模块
import {request} from "./network/request";
/*
request({
  url:'/home/multidata'
},res=>{
  console.log(res);
},err=>{
  console.log(err);
})
 request({
   baseConfig:{

   },
   success:function (res) {

   },
   failure:function (err) {

   }
 })*/
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  // console.log(err);
})
