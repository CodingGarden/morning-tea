if (!Object.fromEntries) {
  Object.fromEntries = (array) => {
    // a place to store the properties
    // const obj = {};
    // // iterate over the array
    // // for (let i = 0; i < array.length; i++) {
    // //   // set a property on the object with a key of innerArray[0]
    // //   // and a value of innerArray[1]
    // //   // const innerArray = array[i];
    // //   // obj[innerArray[0]] = innerArray[1];
    // //   // const innerArray = array[i];
    // //   // const key = innerArray[0];
    // //   // const value = innerArray[1];
    // //   // obj[key] = value;
    // //   const [ key, value ] = array[i];
    // //   obj[key] = value;
    // // }

    // array.forEach(innerArray => {
    //   const [ key, value ] = innerArray;
    //   obj[key] = value;
    // });

    // return obj;
    // return array.reduce((obj, innerArray) => {
    //   const [ key, value ] = innerArray;
    //   obj[key] = value;
    //   return obj;
    // }, {});

    return array.reduce((obj, [ key, value ]) => (obj[key] = value, obj), {});
  };
}

const arr = [['name', 'Pawel'], ['surname', 'Grzybek'], ['age', 31]];
const obj = Object.fromEntries(arr);
console.log(obj);
// {name: "Pawel", surname: "Grzybek", age: 31}