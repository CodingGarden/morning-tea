console.log('hello world');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}

const lib = Object.freeze({
  add,
  subtract,
  sum,
});

module.exports = lib;
