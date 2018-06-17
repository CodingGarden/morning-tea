// let arr = Array(100).map((_, i) => i);
// console.log(arr[0] === undefined); 

// arr = [...Array(100)].map((_, i) => i);
// console.log(arr[0]);
// console.log(arr);

let arr = []
Array.from({ length: 100 }, (_, i) => {
  arr[i] = i
})
console.log(arr[0])
console.log(arr)
