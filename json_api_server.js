var url = require('url')
var http =  require('http')
var fs = require('fs')
var port = process.argv[2]
var routes = {
  '/api/parsetime':function(parsedUrl){
    d = new Date(parsedUrl.query.iso)
    return{
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds()
    }
  },

  '/api/unixtime': function(parsedUrl){
    return {
      unixtime: (new Date(parsedUrl.query.iso)).getTime()
    }
  }
}


var server = http.createServer(function(req, res){
  var parsedUrl = url.parse(req.url, true)
  var resource = routes[parsedUrl.pathname]
  if(req.method == 'GET'){
    res.writeHead(200, {'Content-Type':'application/json'})
    res.end(JSON.stringify(resource(parsedUrl)))
  }
})

server.listen(port)
