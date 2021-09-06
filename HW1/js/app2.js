let num2_1 = parseFloat(prompt('Введите первое число'));
if (isNaN(num2_1)) {
  throw new Error("Некорректный ввод!");
} 

let num2_2 = parseFloat(prompt('Введите второе число'));
if (isNaN(num2_2)) {
  throw new Error('Некорректный ввод!');
} 

function mathOperations(n1, n2) {
  if (n2 !== 0) {
    console.log('Ответ: ', n1 + n2,  ', ', n1 / n2);
  } else {
    console.log('Нельзя делить на 0!');
  }
}

mathOperations(num2_1, num2_2);
