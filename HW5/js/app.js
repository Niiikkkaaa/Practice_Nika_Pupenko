class Stack {
  constructor(max = 10) {
    if(typeof(max) !== 'number' || !isFinite(max)) {
      throw new Error('Некорректный ввод!');
    } else {
      this.max = max;
    }
  this.current = null;
  this.count = 0; 
  }
  
  push = (elem) => {
    if(this.count === this.max) throw new Error('Стек переполнен!');

    let node = {elem, prev: null};
    if (this.current) {
      node.prev = this.current;
    } 
    this.current = node;
    this.count += 1;
  }

  pop = () => {
    if(this.count === 0) throw new Error('Стек пуст!');
    result = this.current.elem;
    this.current = this.current.prev;
    this.count -= 1;
    return result;
  }
  
  peek = () => {
    if(this.count === 0) return null;
    return this.current.elem;
  }

  isEmpty = () => {
    return this.count === 0;
  } 

  toArray = () => {
    let arr = [];
    let i = this.current;
    while(i) {
      arr.push(i.elem);
      i = i.prev;
    }
    return arr.reverse();
  }

  static fromIterable(iterable) {
    if( iterable === null && typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error('Некорректный ввод!');
    }

    let stack = new Stack(iterable.length);

    for (let item of iterable) {
      stack.push(item);
    }
    return stack;
  }
}

module.exports = { Stack };