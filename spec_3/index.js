let example = "Catch me outside, how about that?"

const dropEmpty = (array) => {
  console.log(array)
  let newArray = []
  for(i = 0; i < array.length; i++){
    let currentWord = array[i]
    if( currentWord){
      newArray.push(currentWord)
    }
  }
  console.log('new',newArray)
  return newArray
}

const stringIndex = (index, phrase) => {
  let phraseAsArray = splitOnSpace(phrase)
  console.log(phraseAsArray)
  phraseAsArray = dropEmpty(phraseAsArray)
  return phraseAsArray[index - 1]
}

const splitOnSpace = (word) => {
  const wordArray = word.split(' ')
  const cleanedArray = wordArray.map(stripPunctuation)
  return cleanedArray
}

const stripPunctuation = (word) => {
  return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")
}


console.log(stringIndex(3,example))
