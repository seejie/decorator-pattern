// 场景还原

// before hook
Function.prototype.before = function (beforefn) {
  let _self = this 
  return function () { 
    beforefn.apply (this, arguments)  
    return _self.apply (this, arguments)  
  } 
}

// after hook
Function.prototype.after = function (afterfn) { 
  let _self = this
  return function () {
    let ret = _self.apply (this, arguments)  
    afterfn.apply (this, arguments) 
    return ret
  }
}

// 张三
function play (n) {
  console.log('获取url并播放')
  console.log(n)
}

// 李四
function login (n) {
  console.log('登陆')
  console.log(n)
}

// 王五
function getInfo (n) {
  console.log('获取用户信息')
  console.log(n)
}

// 赵六
function log (n) {
  console.log('日志上报')
  console.log(n)
}

var play = play.before(getInfo.before(login)).after(log)

play(1)