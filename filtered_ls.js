var fs = require('fs')
var path = require('path')
var ext = process.argv[3]
function printDir(){
  fs.readdir(process.argv[2], function donePrinting(err, list){
    for(let i=0; i<list.length; i++){
      let extension = path.extname(list[i])
      // extension.substr(1)
      // console.log(extension)
      if(extension == '.'+ext){
        console.log(list[i])
      }
    }
  })
}
printDir()
