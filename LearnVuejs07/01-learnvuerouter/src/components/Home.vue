<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data (){
      return {
        message:'你好啊',
        path:'/home/news'
      }
    },
    // 三个生命周期函数：created mounted updated
    created() {
    // 创建组件的时候回调的
    //   document.title='首页'
      console.log('created');
    },
    destroyed() {
      console.log('destroyed');
    },
    // 当页面处于活跃状态时执行的函数,只有使用了keep-alive时，才是有效的
    activated() {
      this.$router.push(this.path)
      console.log('activated');
    },
    deactivated(){
      console.log('deactivated');
    },
    beforeRouteLeave(to,from,next){
      this.path=this.$router.path
      next()
    },
    // /*
    mounted() {
    //  template挂载到dom上回调的
    },
    updated() {
    //界面发生变化的时候回调的
    }
  }
</script>

<style scoped>

</style>
