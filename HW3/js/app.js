Array.prototype.myFilter = function(callback, thisArr) {
  let result = this.reduce(function(arr, item, index, itemArr) {
    return (callback.call(thisArr, item, index, itemArr) ? [...arr, item] : arr);
  }, [])
  
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