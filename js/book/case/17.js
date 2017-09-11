var t = 40;

var result;

switch(t){
    case 10:
        result =  'десять';
        break;
    case 11:
        result =  'одиннадцать';
        break;
    case 12:
        result =  'двенадцать';
        break;
    case 13:
        result =  'тринадцать';
        break;
    case 14:
        result =  'четырнадцать';
        break;
    case 15:
        result =  'пятнадцать ';
        break;
    case 16:
        result =  'шестнадцать';
        break;
    case 17:
        result =  'семнадцать';
        break;
    case 18:
        result =  'восемнадцать';
        break;
    case 19:
        result =  'девятнадцать ';
        break;
    case 20:
        result =  'двадцать ';
        break;
    case 21:
        result =  'двадцать одно ';
        break;
    case 22:
        result =  'двадцать два ';
        break;
    case 23:
        result =  'двадцать три ';
        break;
    case 24:
        result =  'двадцать четыре';
        break;
    case 25:
        result =  'двадцать пять';
        break;
    case 26:
        result =  'двадцать шесть';
        break;
    case 27:
        result =  'двадцать семь';
        break;
    case 28:
        result =  'двадцать восемь';
        break;
    case 29:
        result =  'двадцать девять';
        break;
    case 30:
        result =  'тридцать';
        break;
    case 31:
        result =  'тридцать один';
        break;
    case 32:
        result =  'тридцать два';
        break;
    case 33:
        result =  'тридцать три';
        break;
    case 34:
        result =  'тридцать четыре';
        break;
    case 35:
        result =  'тридцать пять';
        break;
    case 36:
        result =  'тридцать шесть';
        break;
    case 37:
        result =  'тридцать семь';
        break;
    case 38:
        result =  'тридцать восемь';
        break;
    case 39:
        result =  'тридцать девять';
        break;
    case 40:
        result =  'сорок';
        break;
}

if (t === 21 || t === 31) {
    result +=  ' учебное задание'
} else {
    result +=  ' учебных заданий';
}


console.log(result);
