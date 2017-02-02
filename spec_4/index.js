const toFib = require('./toFib')
const toDec = require('./toDec')

const test  = '23'

const isDecimal = (string) => {
  let decimal = false
  string.split('').forEach(number => { if (number > 1) {decimal = true} })
  return decimal
}

const convert = (string) => {
  if(isDecimal(string)){
    return toFib(string)
  }else return toDec(string)
}

module.exports = convert
