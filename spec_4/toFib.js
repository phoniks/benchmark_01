const fib = require('fib')

const toFib = (string) => {
  let number = parseInt(string)
  let fibDigits = []
  let final

  if(fibDigits.length > 0){
    console.log('if there are digits', fibDigits);
    final = digitsToString(fibDigits)
  }

  let next = number

  while( parseInt(final) < number || fibDigits[0] === undefined ){
    let nextDigitsIndex = nextfib(next) - 1
    fibDigits.push(nextDigitsIndex)
    let remainder = number - fib(nextDigitsIndex)
    next = remainder
  }

  if(final === number){
    return final
  }

  return final
}

const nextfib = (number) => {
  let next = 1
  while( fib(next) < number ){
    next += 1
  }
  return next
}

const isEmpty = array => array.length === 0

const updateValue = fibDigits => {
  console.log(fibDigits)
  fibDigits.forEach(digit => {
    console.log(digit);
  })
}

const digitsToString = (array) =>{
  let value = []

  if(isEmpty(array)){
    return 0
  }

  updateValue(fibDigits)

  console.log(value.toString());
  return value.toString()
}

module.exports = toFib
