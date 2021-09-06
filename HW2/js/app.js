function makeObjectDeepCopy(object) {
  let newObject = {};

  for (let key in object) {
    if (typeof object[key] === 'object' && object[key] !== null && !Array.isArray(object[key])) {
      newObject[key] = makeObjectDeepCopy(object[key]);
    } else if (Array.isArray(object[key])) {
      newObject[key] = [...object[key]];
    } else {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

function selectFromInterval(arr, n1, n2) {
  let arr2 = [];

  if (!Array.isArray(arr) || typeof(n1) !== 'number' || typeof(n2) !== 'number' || isNaN(n1) || isNaN(n2) ) {
    throw new Error('Ошибка!');
  }

  for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) !== 'number' || isNaN(arr[i])) {
      throw new Error('Ошибка!');
    }
  }

  if (n1 > n2) {
    let temp = n1;
    n1 = n2;
    n2 = temp;
  }

  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i] >= n1 && arr[i] <= n2) {
      arr2.push(arr[i]);
    }
  }

  return arr2;
}

const myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function() {

  if (typeof(this.from) !== 'number' || typeof(this.to) !== 'number' || isNaN(this.from) || isNaN(this.to)) {
    throw new Error('Ошибка!');
  }

  if(this.from > this.to) {
    throw new Error('Ошибка!');
  }

  return {
    current: this.from,
    last: this.to,
    next() {
      return {
        done: this.current > this.last,
        value: this.current++,
      };
    }
  };
}
