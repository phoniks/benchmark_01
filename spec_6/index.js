const json = require('comment-json')
const traverse = require('traverse')
const fs = require('fs')
const object = json.parse(fs.readFileSync('../jsonObject.json').toString())


const findValue = (collection,value) => {
  let parse = traverse(collection)
  let paths = parse.paths()

  let targetPath
  let pathToValue = paths.map(path => {
    if (parse.get(path) === value){

      return true
    }
    return false
  })

  let count = 0

  pathToValue.forEach((place, index) => {

    if(place === true){
      count++
      targetPath = paths[index]
    }
  })
  let result = targetPath.join(' -> ')

  return result
}

console.log(findValue( object , "Richard III"));
