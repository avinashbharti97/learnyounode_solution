var fs = require('fs')
var buf = fs.readFileSync(process.argv[2])
var str = buf.toString()
// console.log(str)
var length = str.split(/\r\n|\r|\n/).length
console.log(length-1)
