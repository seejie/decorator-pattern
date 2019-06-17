// 装饰-承接

// 张三
function fn(n) {
  console.log('获取url并播放')
  console.log(n)
  // 假设业务代码20行。。。
}

// 李四
var fn1 = fn 
fn = function (n) {
  console.log('登陆')
  console.log(n)
  // 假设业务代码15行。。。
  fn1(n)
}

// 王五
var fn2 = fn
fn = function (n) {
  fn2(n)
  console.log('获取用户信息')
  console.log(n)
  // 假设业务代码30行。。。
}

// 赵六
var fn3 = fn 
fn = function (n) {
  fn3(n)
  console.log('日志上报')
  console.log(n)
}

// 函数调用
fn(1)

// 祖传的代码尽管内部再脏乱，也是经过无数用户验证过的
// 没有修改fn内部代码，传承了祖传代码
// document.body.onclick = () => console.log(1)
// var bodyOnclick = document.body.onclick
// document.body.onclick = () => !bodyOnclick() && console.log(2)
// 修改了内部代码，违反开闭原则