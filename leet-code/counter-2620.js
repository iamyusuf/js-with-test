export const createCounter = function (n=1) {
  return function() {
    return n++;
  }
}