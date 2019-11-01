// Ronnie Junior
// heloo cj, first question, what is lexical environment

// const person = {
//   name: 'CJ',
//   sayHello: function() {
//     console.log(this);
//     console.log('Hello!', this.name);
//   }
// };

// person.sayHello();
// person.sayHello.call({ name: 'Ronnie' });
// look into apply, bind

// const person = {
//   name: 'CJ',
//   sayHello: () => {
//     console.log(this);
//     console.log('Hello!', this.name);
//   }
// };

// person.sayHello();
// person.sayHello.call({ name: 'Ronnie' });

class Person {
  constructor(name) {
    this.name = name;
    this.sayHello = () => {
      console.log(this);
      console.log('Hello!', this.name);  
    };
  }

  // sayHello() {
  //   console.log(this);
  //   console.log('Hello!', this.name);
  // }
}

const cj = new Person('CJ');
cj.sayHello();

cj.sayHello.call({ name: 'Ronnie' });