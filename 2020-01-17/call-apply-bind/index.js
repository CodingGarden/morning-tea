// function Dog(name, isGood = true) {
//   this.name = name;
//   this.isGood = isGood;

//   this.getName = function() {
//     return this.name;
//   }
// }

// function Dog(name, isGood = true) {
//   this.name = name;
//   this.isGood = isGood;
// }

// Dog.prototype.getName = function() {
//   return this.name;
// }

// class Dog {
//   constructor(name, age = 1, isGood = true) {
//     this.name = name;
//     this.isGood = isGood;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }

//   getDogYears(multiplier = 7) {
//     return this.age * multiplier;
//   }
// }

class Dog {
  constructor(name, age = 1, isGood = true) {
    this.name = name;
    this.isGood = isGood;
    this.age = age;
    // this.getName = () => {
    //   return this.name;
    // };
    // this.getDogYears = (multiplier = 7) => {
    //   return this.age * multiplier;
    // };
    this.getName = function() {
      return this.name;
    };
    this.getDogYears = function(multiplier = 7) {
      return this.age * multiplier;
    };
  }
}

const fido = new Dog('Fido', 5);
console.log(fido);
console.log(fido.getName());

const frida = new Dog('Frida', 3);
console.log(frida);
console.log(frida.getName());

const cujo = new Dog('Cujo', 6, false);
console.log(cujo);
console.log(cujo.getName());

console.log(cujo.name);
console.log(cujo.age);



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// Bind creates a new function, with a pre-bound this value.
// This new function can be invoked at later time.

const boundFunction = fido.getName.bind(cujo);
console.log(boundFunction());
console.log(boundFunction());
console.log(boundFunction());
console.log(boundFunction());
console.log(boundFunction());
console.log(fido.getName.bind(cujo)());

const anotherBoundFunction = fido.getName.bind({ name: 'Ed' });
console.log(anotherBoundFunction());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
console.log(fido.getName.call(cujo));
// console.log(Dog.prototype.getName.call(cujo));

console.log(fido.getDogYears());
console.log(fido.getDogYears.call(cujo, 3));


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

console.log(fido.getName.apply(cujo));
console.log(fido.getDogYears.apply(cujo, [3]));

// const result = [].map.call('hello world', (letter) => letter.toUpperCase());
const callResult = Array.prototype.map.call('hello world', (letter) => letter.toUpperCase());
console.log(callResult);

const applyResult = Array.prototype.map.apply('hello world', [(letter) => letter.toUpperCase()]);
console.log(applyResult);
