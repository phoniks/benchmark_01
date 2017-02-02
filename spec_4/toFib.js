const fib = require('./fib')
const toDec = require('./toDec')

const isEmpty = array => array.length === 0

const nextfib = (number) => {
  let next = 1
  while( fib(next) <= number ){
    next += 1
  }
  return next
}

const expand = (fibIndexes, number) => {
  let fibSequence = []
  let sequenceLength = nextfib(number)

  for(let i = sequenceLength - 1; i > 0; i--){
    if(i === 1){
      fibSequence.push('1')
    }
    fibSequence.push('0')
  }
  fibIndexes.forEach(index =>{
    console.log(index)
    fibSequence.splice(index, 1, '1')
  })

  return fibSequence.reverse().join('').toString()
}

const toFib = (number) => {
  let fibIndexes = []
  let next = number
  let result = expand(fibIndexes, number)

  if ( toDec(result) === number){
    return result
  }

  let nearestLesserFib = nextfib(next) - 1
  let remainder = next - nearestLesserFib

  while(remainder !== 0){
    console.log(remainder);
      fibIndexes.push(nearestLesserFib)
      next = remainder
  }

if( remainder === 0 || fibIndexes.length > nextfib(number)){
  return result
}

  return result
}

//console.log(expand([0,0,0,0,1], 5))
console.log(toFib(4));
module.exports = toFib
