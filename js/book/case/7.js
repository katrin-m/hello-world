var m = 5;
console.log('Введите номер единицы массы (от 1 до 5):');

  switch(m){
    case 1:
        console.log('(кг) = ', m, '(кг)');
        break;
    case 2:
        console.log('(мг) = ', (m / 1000000), '(кг)');
        break;
    case 3:
        console.log('(г) = ', m / 1000, '(кг)');
        break;
    case 4:
        console.log('(т) = ', m * 1000, '(кг)');
        break;
    case 5:
        console.log('(ц) = ', m * 100, '(кг)');
        break;
    default:
        console.log('Единицы массы с таким номером нет');
}