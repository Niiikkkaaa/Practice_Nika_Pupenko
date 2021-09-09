Array.prototype.myFilter = function(callback, thisArr) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArr, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
} 


function createDebounceFunction(callback, ms) {
  let timeout;

  return function() {
    const callFunction = function() {
      callback.apply(this, arguments);
    }

    clearTimeout(timeout);
    timeout = setTimeout(callFunction, ms);
  };
}