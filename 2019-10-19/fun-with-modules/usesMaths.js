const maths = require('./maths');

function useTheMath() {
  const result = maths.subtract(10, 20);
  console.log('the result is', result);
  const result2 = maths.divide(30, 5);
  console.log('the other result is', result2);
}

module.exports = {
  useTheMath,
};
