/*import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})*/
// 配置路由相关的信息,导入插件等信息
import VueRouter from 'vue-router'
import  Vue from  'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews =()=>import('../components/HomeNews')
const HomeMessage =()=>import('../components/HomeMessage')
const Profile =()=>import('../components/Profile')
//1.通过vue.use(插件)，安装插件
Vue.use(VueRouter)
//2.创建VueRouter（映射）对象,一个对象配置一个映射关系
const routes=[
  {
    path:'',
    //  redirect:重定向：默认页面（路径）配置到最上面
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    },
    // 子路由的嵌套使用：children，加载到首页的子路由
    children:[
      // {
      // //   // 子路由的默认路径
      //   path:'',
      //   redirect: 'news'
      // },
      {
        //子路由不需要加/
        path:'news',
        component: HomeNews
      },
      {
        path:'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于'
    },
    beforeEnter:((to,from,next)=>{
      // console.log('about beforeEnter');
      next()
    })
  },
  {
    // 配置动态路由，见名知意：path:'/user/:id'
    path:'/user/:id',
    component:User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'
    }
  }
]
const router=new VueRouter({
//  配置路由和组件之间的应用关系
  routes,
  // 去掉hash值（后缀---#）变成/ ：mode:'history'
  mode:'history',
 // 统一对link的class进行修改
 linkActiveClass:'active'
})
// 前置守卫（guard）表示回调
router.beforeEach((to,from,next)=>{
  // 从from跳转到to
  // document.title=to.meta.title
  document.title=to.matched[0].meta.title
  next()
})
// 后置钩子（hook），页面跳转后的回调函数，不需要主动调用 next()函数

router.afterEach((to,from)=>{
  // console.log('------');
})
//3.将routes对象传入实例中.将router导出到main.js的实例去
export default router
