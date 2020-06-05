// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
console.log(App);
// const cpn={
//   template:`<div>{{message}}</div>`,
//   data(){
//     return {
//       message:'我是组件message'
//     }
//   }
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  //render函数的演练过程 ---
  render:function (h) {
  //普通用法：  1.creatElement：('标签'，{标签的属性},['内容'])；
  //   return creatElement('h2',
  //     {class:'box'},
  //     ['Hello World',creatElement('button',['按钮'])])
  //  传入组件对象用法：
  //   return creatElement(App)
    return h(App)
  }
})
// 那么.vue 文件中的template是由谁处理的？
//是由vue-template-compiler
