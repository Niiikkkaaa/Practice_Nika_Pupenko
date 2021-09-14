function concatStrings(first, separator) {
  return function(second) {
    if (typeof(second) !== 'string') {
      return first;
    } else if (typeof(separator) !== 'string') {
      return concatStrings(first + second);
    } else {
      return concatStrings(first + separator + second, separator);
    }
  };
}

class Calculator {
  constructor(n1, n2) {
    if(typeof(n1) !== 'number' || typeof(n2) !== 'number' || isNaN(n1) || isNaN(n2) || !isFinite(n1) || !isFinite(n2)) {
      throw new Error('Некорректный ввод!');
    }
    this.n1 = n1;
    this.n2 = n2;
  }

  setX = (n1) => {
    if(typeof(n1) !== 'number' || isNaN(n1) || !isFinite(n1)) {
      throw new Error('Некорректный ввод!');
    }
    this.n1 = n1;
  }

  setY = (n2) => {
    if(typeof(n2) !== 'number' || isNaN(n2) || !isFinite(n2)) {
      throw new Error('Некорректный ввод!');
    }
    this.n2 = n2;
  }

  logSum = () => {
    console.log(this.n1 + this.n2);
  }

  logMul = () => {
    console.log(this.n1 * this.n2);
  }

  logSub = () => {
    console.log(this.n1 - this.n2);
  }

  logDiv = () => {
    if(this.n2 === 0) {
      throw new Error('Нельзя делить на 0!');
    }
    console.log(this.n1 / this.n2);
  }
}