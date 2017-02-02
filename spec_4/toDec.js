const fib = require('./fib')

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

module.exports = toDec
