var http = require('http')
var bl = require('bl')

var url=process.argv.slice(2)
var responses = []
let count=0


function foo(index){

  http.get(url[index], function(response){
    var result = ''
    response.setEncoding('utf8')
    response.pipe(bl(function(err, data){

      let str = data.toString()

      result += str
    }))
    response.on('end', function(){
      responses[index] = result

      count+=1
      if(count === 3){
        for(let i=0; i<3; i++){
          console.log(responses[i])
        }
      }
      // console.log(responses[index])
    })
  })


}

for(let i=0; i<url.length; i++){
  foo(i)
}
