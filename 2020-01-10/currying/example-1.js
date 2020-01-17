// PRANJAL A. 💧 
// 1/5/2020, 2:04:38 AM
// CJ what is function currying, please show with some code examples ⚡

function add(a, b) {
  return a + b;
}

function createAdder(a) {
  return (b) => a + b;
}

const tenAdder = createAdder(10);
let result = tenAdder(10);
console.log(result);
result = tenAdder(20);
console.log(result);
console.log(createAdder(20)(10));

curry = (f) => (...args) => (args.length >= f.length) ? f(...args) : curry(f.bind(null, ...args));