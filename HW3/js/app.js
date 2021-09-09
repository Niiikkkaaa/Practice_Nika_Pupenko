Array.prototype.myFilter = function(callback, thisArr) {
  let result = [];

  this.forEach(function(item, index, itemArr) {
    if (callback.call(thisArr, item, index, itemArr)) {
      result.push(item);
    }
  })

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