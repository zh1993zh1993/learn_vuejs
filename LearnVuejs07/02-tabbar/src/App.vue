<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/mainTabbr/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/*
@import:在style里面引用单独的css文件
*/
 @import "./assets/css/base.css";

</style>
