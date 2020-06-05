const app=new Vue({
  el:'#app',
  data:{
    books: [{
      id:1,
      name:'《算法导论》',
      date:'2006-9',
      price:85.00,
      count:1
    },
      {
        id:2,
        name:'《编程艺术》',
        date:'2006-9',
        price:60.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2006-9',
        price:39.00,
        count:1
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-9',
        price:85.00,
        count:1
      },
    ]
  },

  methods:{
    /*
    getFinalPrice(price){
      //.toFixed(2):保留两位小数
      return '￥'+price.toFixed(2)*/
    increment(index){
     return  this.books[index].count++

    },
    decrement(index) {
     return  this.books[index].count--
    },
    removeHandle(index){
      // index：删除点击的那个，删除一个（本身）
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      /*1. 普通的for循环
      let totalPrice=0;
      for (let i=0;i<this.books.length;i++){
        totalPrice +=this.books[i].price*this.books[i].count
      }
      return totalPrice
       */

    /* 2. for(let i in this.books)
      let totalPrice=0;
      for (let i in this.books){
        totalPrice +=this.books[i].price*this.books[i].count
      }
      return totalPrice*/

       // 3. for(let i of this.books)
      /*
      let totalPrice=0;
      for (let item of this.books){
        totalPrice+=item.price*item.count
      }
      return totalPrice*/

      //4.reduce：对象 实例 计算数组元素相加后的总和
      return this.books.reduce((preValue,book)=> {
        //preValue：前一个的值，也就是book.price*book.count的值，初始值为0
        return preValue+book.price*book.count
      },0)
    }
  },

  //filters:过滤器
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  }
})
