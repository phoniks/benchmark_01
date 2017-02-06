const dropEmpty = (array) => {
  console.log(array)
  let newArray = []
  for(i = 0; i < array.length; i++){
    let currentWord = array[i]
    if( currentWord){
      newArray.push(currentWord)
    }
  }
  return newArray
}

const stringIndex = (index, phrase) => {
  return dropEmpty(splitOnSpace(phrase))[index - 1]
}

const splitOnSpace = (word) => {

  return word.split(' ').map(stripPunctuation)
}

const stripPunctuation = (word) => {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")
}

module.exports = stringIndex
