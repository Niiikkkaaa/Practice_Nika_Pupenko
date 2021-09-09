Array.prototype.myFilter = function(callback, thisArr) {
  return this.reduce ((arr, item, index, itemArr) => callback.call(thisArr, item, index, itemArr) ? [...arr, item] : arr , []);
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