let num1_1 = parseInt(prompt('Введите первое число ( 0 < . . . )'));
let num1_2 = parseInt(prompt('Введите второе число ( 0 < , . . . ,  <= 10 )'));

function numeralSystem(n1, n2) {
  if(!Number.isInteger(n1) || !Number.isInteger(n2) || n1 < 0 || n2 < 1 || n2 > 10) {
    console.log('Некорректный ввод!');
  } else {
    let arr = [];
    let count = n1;

    do {
      arr.push(count % n2);
      count = (count - (count % n2)) / n2;
    } while(count >= n2);

    arr.push(count % n2);
    arr.reverse();
    let result1 = parseInt(arr.join(''));
    console.log('Ответ: ', result1);
  }
}

numeralSystem(num1_1, num1_2);