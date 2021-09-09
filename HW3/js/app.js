Array.prototype.myFilter = function(callback, args = this) {
  let result = [];

  for (let i = 0; i < args.length; i++) {
    if (callback.call(args[i], i, args)) {
      result.push(args[i]);
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