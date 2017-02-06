const checkCharacters = (character) =>{
  switch (character) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case ' ':
      return
      break;
    default:
      return character
  }
}

const clean = (array) =>{
  let result = []
  array.forEach(indexValue =>{
    if(indexValue !== undefined){
      result.push(indexValue)
    }
  })
  return result.join('').toString()
}

const disemvowel = (string) => {
  let vowelsDropped = string.split('').map(checkCharacters)
  return clean(vowelsDropped)
}

module.exports = disemvowel
