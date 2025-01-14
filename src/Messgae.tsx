// 我们一般使用ts for plain type script/ tsx for react

// 大驼峰命名法
function Message() {
    //这叫jsx语法
  const name = 'Chen';
  if(name)
    return <h1>Hello, {name}!</h1>;
  return <h1>Hello, World!</h1>;
}

export default Message;