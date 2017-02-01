const test  = '1100030'

const isDecimal = (string) => {
  let decimal = false
  string.split('').forEach(number => { if (number > 1) {decimal = true} })
  return decimal
}


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

const stringToArray = (string) => {
  return string.split('').reverse()
}

const getIndexValue = (digit, index, array) => {
  return fib(index + 1)
}

const toDec = (string) => {
  let total = 0
  let number = stringToArray(string)
  let indexValues = number.map(getIndexValue)
  for(i=0; i< number.length ; i++){
    if(number[i] === '1'){
      total += indexValues[i]
    }
  }
  return total
}

const toFib = (string) => {
  let fibSequence = []
  if(parseInt(string) > 0){
    fibSequence.push('1')
  }
  while(toDec(fibSequence.toString()) < parseInt(string)){
    fibSequence.push('0')
  }
  while(toDec(fibSequence.toString()) > parseInt(string)){
    fibSequence.pop()
  }
  console.log(toDec(fibSequence.toString()));
  return fibSequence.toString()
}

const convert = (string) => {
  if(isDecimal(string)){
    return toFib(string)
  }else return toDec(string)
}

console.log(convert(test))
