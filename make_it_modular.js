var module = require('./module.js')
var path = require('path')
var ext = process.argv[3]
var dir = process.argv[2]


module(dir, ext, function(err, list){
  for(let i=0; i<list.length; i++){
    console.log(list[i])
  }
})
