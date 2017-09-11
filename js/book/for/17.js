var prompt = require('prompt-sync')();

console.log('begin');
var a = +prompt('Please enter a: ');
var n = +prompt('Please enter n: ');
var result = 0;


for (var i=0; i<n;i++) {
    var l = Math.pow(a, i);
    result=result+l;
    console.log(l);
}
console.log(result);