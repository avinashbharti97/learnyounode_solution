let sum =0;
let a = process.argv
for (let i=2; i<a.length; i++){
  sum+=Number(process.argv[i])
}
console.log(sum)
