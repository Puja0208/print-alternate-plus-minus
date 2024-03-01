//Write fn which behaves as below
//let P = fn(‘hello’)
// P() -> +hello
// P() -> -hello
// P() -> +hello
// P() -> -hello

const fn = (str) => {
  let count = 1;
  return () => {
    if (count % 2 == 0) {
      console.log(`+${str}`);
    } else {
      console.log(`-${str}`);
    }
    count++;
  };
};
