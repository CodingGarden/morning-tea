let x = 0;

async function test() {
  x = x + await 2;
  console.log(x);
}

x = x + 1;
test();
console.log(x);