var fs = require('fs')

var length = undefined
var str =undefined


function count(callback){
  fs.readFile(process.argv[2], function doneCounting(err, fileContents){
    str = fileContents.toString()
    length = str.split(/\r\n|\r|\n/).length
    callback()
  })
}

function countMyNumber(){
  console.log(length-1)
}

count(countMyNumber)
