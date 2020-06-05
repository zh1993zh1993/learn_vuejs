<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，呵呵呵</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
        // 谁处于活跃状态，就显示谁,
        return this.$route.params.id
      }
    },
    created(){
      document.title='用户'

    },
    methods:{
      btnClick(){
        // 所有的组件都继承自Vue类的原型
        console.log(this.$router);
        console.log(this.$route);
      }
    }
  }
</script>

<style scoped>

</style>
