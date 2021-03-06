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


var axios = new XMLHttpRequest()
axios.open('get', 'https://www.baidu.com')
axios.withCredentials = true

// 请求拦截
var request = _ => console.log('-----请求拦截器-----\n')
axios.send = axios.send.before(request)
// XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.send.before(request)

axios.send()
axios.onreadystatechange = function () {
  if (axios.readyState === 4 && axios.status === 200) {
    console.log('请求成功')
  }
}

// 响应拦截
var response = _ => console.log('-----响应拦截器-----\n')
// readyState 会经历从1->2->3->4的过程,
// 不判断readyState === 4 会被多次调用
axios.onreadystatechange = axios.onreadystatechange.after(response)
