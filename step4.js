// 装饰者模式：AOP的思维

// before hook
Function.prototype.before = function (beforefn) {
  // 保存原函数的引用
  let _self = this 
  // 返回包含了原函数和新函数的"代理"函数
  return function () { 
    // 新函数在原函数之前执行
    beforefn.apply (this, arguments)  
    // 执行原函数并返回原函数的执行结果
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

// 链式调用
document.body.onclick = function  ()  {console.log (1) }
document.body.onclick = (document.body.onclick || function () {
  }) .after (function () { 
    console.log (2) 
  }) .after (function () { 
    console.log (3) 
  }) .after (function () { 
    console.log (4) 
  }) 