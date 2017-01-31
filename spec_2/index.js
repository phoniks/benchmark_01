const letters = ['_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
'P','Q','R','S','T','U','V','W','X','Y','Z']

const letterValues = [
  ['_', 2, 0],
  ['A', 9, 0],
  ['B', 2, 0],
  ['C', 2, 0 ],
  ['D', 4, 0],
  ['E', 12, 0],
  ['F',2, 0],
  ['G',3, 0],
  ['H',2, 0],
  ['I',9, 0],
  ['J',1, 0],
  ['K',1, 0],
  ['L',4, 0],
  ['M',2, 0],
  ['N',6, 0],
  ['O',8, 0],
  ['P',2, 0],
  ['Q', 1, 0],
  ['R', 6, 0],
  ['S',4, 0],
  ['T',6, 0],
  ['U',4, 0],
  ['V', 2, 0],
  ['W',2, 0],
  ['X',1, 0],
  ['Y',2, 0],
  ['Z',1, 0]
]


  const frequencies = [[],[],[],[],[],[],[],[],[],[],[],[],[]]

  const setFrequencies = () => {
    letters.forEach((letter, i , a) => {
      const newFrequency = letterValues[i][1]
      let targetArray = frequencies[newFrequency]
      targetArray.push(letter)
    })
  }

  const calculateNewFrequency = character => {
    let indexOfCharacter = letters.findIndex(a => a === character)
    let values = letterValues[indexOfCharacter]
    let previousFrequencyIndex = values[1]
    let newFrequencyIndex
    if(previousFrequencyIndex > 0){
      newFrequencyIndex = previousFrequencyIndex - 1
    } else { console.log('Someone hid a tile up their sleeve!! Too many', `'`, values[0],`'`, 'tiles' ); return}
    let oldFrequencyArray = frequencies[previousFrequencyIndex]
    let indexOfOld = oldFrequencyArray.findIndex(a => a === character)
    let removedItem = oldFrequencyArray.splice(indexOfOld, 1)
    let targetFrequency = frequencies[newFrequencyIndex]
    targetFrequency.push(removedItem[0])
    values[1] -= 1
    values[2] += 1
  }

  const adjustFrequencies = (string) => {
    let arrayOfCharacters = string.split('')
    arrayOfCharacters.forEach(calculateNewFrequency)
  }

const remainingTiles = (usedString) => {
  setFrequencies()
  adjustFrequencies(usedString)
  for(i = frequencies.length - 1 ; i > 0; i--){
    console.log('i', i, 'freq', frequencies[i])
  }
}

module.exports = remainingTiles
