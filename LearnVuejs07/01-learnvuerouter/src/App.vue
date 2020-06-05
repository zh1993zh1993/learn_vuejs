<template>
  <div id="app">
<!-- router-link 全局组件：是vue-router中已经内置的一个组件，他会被渲染成一个a标签-->
<!--    <router-link to="/home" >首页</router-link>-->
<!--    <router-link to="/about">关于</router-link>-->

<!--  tag="button" 将a标签渲染成button，tag属性可以渲染很多标签 replace:不能用返回按钮 -->
<!--    改变class属性：active-class="active"-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <!--   // 统一对link的class进行修改：在router的index.js；里面进行修改-->
<!--    <router-link to="/home" tag="button">首页</router-link>-->
<!--    <router-link to="/about" tag="button" >关于</router-link>-->

<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
<!--    动态的绑定路由，用户信息-->
<!--    <router-link :to="'/user/'+userId">用户</router-link>-->
<!--    <router-link :to="{-->
<!--    path:'/profile',-->
<!--    query:{name:'zh',age:'18',height:1.88}-->
<!--    }">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <!--    站位标签：写在哪里，需要渲染出来的内容就会显示在哪个位置
         router-view：根据当前的路径，动态渲染出不同的组件
    -->
<!--    <router-view></router-view>-->
<!--    为了保证生命周期不反复执行又销毁-->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return {
      userId:'zhh'
    }
  },
  methods:{
    homeClick(){
    //  通过代码的方式修改路由 可以返回
    //   this.$router.push('/home')
    //  通过代码的方式修改路由 不可以返回
    //  加上return 回调就不会出现多次点击报错
     return  this.$router.replace('/home')
    },
    aboutClick(){
      // this.$router.push('/about')

     return  this.$router.replace('/about')    },
    userClick(){
      return this.$router.push('/user/'+this.userId)
    },
    profileClick(){
      // 路由添加
      return this.$router.push({
        path:'/profile/',
        query:{
          name:'zh',
          age:'18',
          height:1.88
        }
      })
    }
  }
}
</script>

<style>
/*.router-link-active{*/
/*  color: red;*/
/*}*/
  .active{
    color: red;
  }
</style>
