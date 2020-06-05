import Vue from 'vue'
import App from './App'
// 将index.js里面的router导入
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
console.log(router);
