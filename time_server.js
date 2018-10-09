var net = require('net')
var port = process.argv[2]
var server = net.createServer(function (socket){
  let date = new Date()
  let hours = undefined;
  if(date.getHours()<10){
    hours = '0'+date.getHours()
  }
  else{
    hours = date.getHours()
  }

  let minutes = undefined;
  if(date.getMinutes()<10){
    minutes = '0'+date.getMinutes()
  }
  else{
    minutes = date.getMinutes()
  }

  data = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+hours+':'+minutes+'\n'
  console.log(data)
  socket.write(data)
  socket.end()
})
server.listen(port)
