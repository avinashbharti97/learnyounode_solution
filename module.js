var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback){
  var extension = '.'+ext
  fs.readdir(dir, function bar(err, list){
    if (err){
      return callback(err)
    }
    else{
      result = []
      for(let i=0; i<list.length; i++){
        if(path.extname(list[i]) == extension){
            result.push(list[i])
        }
      }
    }

    callback(null, result)
  })
}
