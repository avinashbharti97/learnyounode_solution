var http = require('http')
var bl = require('bl')
var url = process.argv[2]

http.get(url, function(response){
  response.setEncoding('utf8')
  response.pipe(bl(function(err, data){
    let str = data.toString()
    console.log(str.length)
    console.log(str)
  }))
})