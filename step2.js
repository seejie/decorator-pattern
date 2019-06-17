// aync-await

// 张三
async function fn (n) {
  await fn1(n)
  await fn2(n)
  console.log('获取url并播放')
  console.log(n)
  await fn3(n)
}

// 李四
async function fn1 (n) {
  console.log('登陆')
  console.log(n)
}

// 王五
async function fn2 (n) {
  console.log('获取用户信息')
  console.log(n)
}

// 赵六
async function fn3 (n) {
  console.log('日志上报')
  console.log(n)
}

// 函数调用
fn(1)

// 1.兼容性polyfill
// 2.对fn做了内部修改，违反开闭原则
// 3.对于类似window.onload,document.body.onclick很难为之或无力而为
// async function a(){console.log(1)}
// async document.body.onclick = await a()
