// 不挂载到prototype

const before = function (fn, beforefn) { 
  return function () {
    beforefn.apply(this, arguments)
    return fn.apply(this, arguments) 
  }
}

const after = function (fn, afterfn) { 
  return function () {
    let ret = fn.apply(this, arguments)
    afterfn.apply(this, arguments)
    return ret 
  }
}

var a = before (
  function () {console.log(3)}, 
  function () {console.log(2)}
)

a()

var b = after (
  function () {console.log(3)}, 
  function () {console.log(2)}
)

b()