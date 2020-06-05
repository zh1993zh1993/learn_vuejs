// 编程范式：命令式编程/声明式编程
//编程范式：面向对象编程（第一公民，对象）/函数式编程（第一公民：函数）
//  高阶函数：filter/map/reduce
//filter中的回调函数有一个要求：必须返回一个boolean值
//true:当返回true时，函数内部会自动将这次回调的n加入新的数组中
//false：当返回false时，函数内部会过滤掉这次的n
const nums=[10,20,111,222,444,40,50]
//箭头函数 =>
let toTal=nums.filter(n=>n<100).map(n=> n*2).reduce((pre,n)=>pre+n)
console.log(toTal);
//高阶函数的用法：函数式编程

let toTal=nums.filter(function (n) {
  return n<100
}).map(function (n) {
  return n*2
}).reduce(function (preValue,n) {
  return preValue+n
},0)
console.log(toTal);


// 需求：取出所有小于100的数字
// filter函数的使用：filter过滤数组
/*
let newNums=nums.filter(function (n) {
 // 将数组里的所有数字回调与100做对比，发现小于100返回一个true，将这个数字加入到新的数组中
 // 数字大于100，返回一个false，然后被过滤掉了
 return n<100
})
console.log(newNums);

// 2.map函数的使用：map映射成新的数组
  let new2Nums=newNums.map(function (n) {
  return n*2
})
console.log(new2Nums);

  //3.reduce函数的使用：
//reduce作用：对数组中所有的内容进行汇总
 let total=new2Nums.reduce(function (preValue,n) {
  return preValue+n
},0)
console.log(total);*/
// 第一次遍历：preValue为 0 n为 20
// 第二次：preValue为 20 n为 40
// 第三次：preValue为 60 n为 80
// 第四次：preValue为 140 n为 100