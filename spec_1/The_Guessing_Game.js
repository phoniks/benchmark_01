var readlineSync = require('readline-sync')
var prompt = readlineSync.question
let playAgain = true
let floor = 1
let ceiling = 100

console.log(`Welcome to The Guessing Game\n I'm your host Trumpye Best`)

const playGame = (floor, ceiling) => {

  const generateRandomNumber = (floor, ceiling) => {
    return Math.floor(Math.random() * ceiling) + floor
  }

  let userGuess

  const getUserGuess = (floor, ceiling) =>{
    userGuess = prompt(`Guess a number between ${floor} and ${ceiling}\n>>`)
  }

  while (userGuess < floor || userGuess > ceiling || userGuess === undefined){
    getUserGuess(floor, ceiling)
    if(userGuess<floor||userGuess>ceiling){
      console.log(`Please stay within the bounds of ${floor} and ${ceiling}`)
    }
    if(typeof userGuess !== 'number'){
      console.log(`Please give a number`)
    }
  }

  console.log(`Randomly generating a number between ${floor} and ${ceiling}...`)

  const generatedNumber = generateRandomNumber(floor, ceiling)

  const greaterThan = (guess) => {
    return guess > generatedNumber
  }

  const lesserThan = (guess) => {
    return guess < generatedNumber
  }

  const equalTo = (guess) => {
    return guess === generatedNumber
  }

  if(equalTo(userGuess)){
    console.log('Correct!!! Here are a million points! *Mutters* Don\'t spend em all in one place, eh?' )
  }

  if(greaterThan(userGuess)){
    console.log(`Sorry, the answer was lower than ${userGuess}.  Tough luck sucker! Try again! *Mutters* I ought to start charging a penny a guess.`)
  }

  if(lesserThan(userGuess)){
    console.log(`Sorry, the answer was greater than ${userGuess}.  Tough luck sucker! Try again! *Mutters* I ought to start charging a penny a guess.`)
  }

}

while(playAgain === true){
  playGame(floor, ceiling)

  var playOption = prompt('Would you like to play again?')

  if(playOption.toLowerCase() === 'y' || playOption.toLowerCase() === 'yes'){
    playAgain = true
  }
  if(playOption.toLowerCase() === 'n' || playOption.toLowerCase() === 'no' || playOption.toLowerCase === 'exit'){
    console.log('Goodbye')
    playAgain = false
  }
}
