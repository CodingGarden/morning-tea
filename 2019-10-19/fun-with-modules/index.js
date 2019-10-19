const maths = require('./maths');

maths.divide = function (a, b) {
  return a / b;
};

const usesMaths = require('./usesMaths');

const result = maths.add(1, 2);
console.log(result);

usesMaths.useTheMath();
