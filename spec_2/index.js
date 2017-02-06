  const letters = ['_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
  'P','Q','R','S','T','U','V','W','X','Y','Z']

  const letterValues = [
    ['_', 2 ],['A', 9 ],['B', 2 ],['C', 2 ],['D', 4 ],['E', 12],
    ['F', 2],['G', 3],['H', 2],['I', 9],['J', 1],['K', 1],['L', 4],['M', 2],['N', 6],
    ['O', 8],['P', 2],['Q', 1],['R', 6],['S', 4],['T', 6],['U', 4],['V', 2],['W', 2],
    ['X', 1],['Y', 2],['Z', 1]
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
    let previousFrequencyIndex = letterValues[letters.findIndex(a => a === character)][1]
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
