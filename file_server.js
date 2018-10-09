var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var location = process.argv[3]

var server = http.createServer(function(request, response){
  //source.pipe(destination)  where source is file stream and destination is response
  fs.createReadStream(location).pipe(response)
})

server.listen(port)
