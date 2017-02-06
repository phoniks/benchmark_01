const fib = (n)=>{
  const memo ={}
  function f(n){
    let value

    if(n in memo){
      value = memo[n]
    }
    if(n === 0 || n === 1){
      value = n
    } else {
      value = f(n-1) + f(n-2)
    }
    return value
  }
    return f(n)
}

module.exports = fib
