

var R = 4;
var D = 6;
var L = 24;
var S = 22;
var PI = 3.14;

switch(R) {
    case D = 2 * R:
    case L = PI * D:
    case S = PI * Math.sqrt(R): {
        console.log(D, L, S);

        break;
    }
}

switch (D) {
    case R = D / 2:
    case L = PI * D:
    case S = PI * Math.sqrt(R): {
        console.log(R, L, S);
        break;
    }
}
switch (L) {
    case D = L / PI:
    case R = D / 2:
    case S = PI * R *R: {
        console.log(R, D, S);
        break;
    }
}
switch (S) {
    case R = Math.sqrt(S / PI):
    case D = 2 * R:
    case L = PI * D: {
        console.log(R, D, L);
        break;
    }

    default:
        console.log('Ошибка');
}



