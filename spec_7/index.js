const sugar = require('sugar-date')
const determineFormat = (dateInAnyFormat) =>{
  let format
  if(dateInAnyFormat.includes('-')){
    return '0'
  }
  if(dateInAnyFormat.includes('/')){
    return '1'
  }
  if(dateInAnyFormat.includes('#')){
    return '2'
  }
  if(dateInAnyFormat.includes('*')){
    return '3'
  }
  if(dateInAnyFormat.includes(' ')){
    return '4'
  }
}

const convertDate = (date) => {
  date = date.split('')
  console.log(date);
  let format = determineFormat(date)
  let result = []

  if(format === '0'){
    return date
  }

  if(format === '1' ){
    let year = []
    year.push(date.pop())
    year.unshift(date.pop())

    if (year.join('').toString() < 50){
      year.unshift('2', '0')
    }

    if (year.join('').toString() >= 50){
      year.unshift('1', '9')
    }
    year = year.join('')
    date.pop()
    let month = date[0].toString() + date[1].toString()
    date.shift()
    date.shift()
    date.shift()
    let day = date.join('')
    result.push(year, month, day)
  }

  if(format === '2'){
    let year = []
    let month = []
    let day = []

    day.push(date.pop())
    day.unshift(date.pop())
    date.pop()
    year.push(date.pop())
    year.unshift(date.pop())

    if (year.join('').toString() < 50){
      year.unshift('2', '0')
    }else {
      if (year.join('').toString() >= 50){
      year.unshift('1', '9')
      }
    }
    year = year.join('')

    date.pop()
    day = day.join('')
    month = date.join('')
    result.push(year, month, day);

  }
  if(format === '3'){
    let year = []
    let month = []
    let day = []
    day.push(date.shift())
    day.push(date.shift())
    day = day.join('')
    date.shift()


    month.push(date.shift())
    month.unshift(date.shift())
    month = month.join('')
    date.shift()

    year = date.join('')
    result.push(year, month, day)
  }
  if(format === '4'){
    date = date.join('')
    date = date.split(' ')
    let year = date[2]
    if(year.length <= 2){
      if (year < 50){
        newyear = []
        newyear.push(year)
        newyear.unshift('2', '0')
        year = newyear.join('')
      }else {
        if (year >= 50){
        newyear = []
        newyear.push(year)
        newyear.unshift('1','9')
        year = newyear.join('')
        }
      }
    }
    let day = date[1]
    let month = date[0]
    month = new sugar.Date(month).format('%m').raw

    month
    result.push(year, month, day);
  }
  return result.join('-')
}

const convert = (arrayOfDates, formatsArray) => {
  let convertedArray = arrayOfDates.map(convertDate)
  return convertedArray
}

module.exports = convert
