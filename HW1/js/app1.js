let num1_1 = parseInt(prompt('Введите первое число ( 0 < . . . )'));
let num1_2 = parseInt(prompt('Введите второе число ( 1 < . . . )'));

function numeralSystem(n1, n2) {
  if(isNaN(n1) || isNaN(n2) || n1 < 0 || n2 < 1) {
    console.log('Некорректный ввод!');
  } else {
    console.log('Ответ: ', n1.toString(n2));
  }
}

numeralSystem(num1_1, num1_2);
