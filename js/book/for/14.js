console.log('begin');
var n = 40;
var square = 0;
for(var i=1; i<=(2*n-1); i=i+2) {
    square = square +i;
    console.log('square: ',square);
}
console.log(square, Math.sqrt(square));
console.log('end');