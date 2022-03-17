// Power Of 2

//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of
// 2 with the exponent ranging from 0 to n(inclusive).

function powersOfTwo(n) {
  // create an empty array
  let array = [];
  for (let i = 0; i <= n; i++) {
    array[i] = 2 ** i;
  }
  return array;
}

console.log(powersOfTwo(1));

function powerOfThree(k) {
  // create an empty array
  let array = [];
  for (let i = 0; i <= k; i++) {
    // Use loop to store result of 2**i
    array[i] = 3 ** i;
  }
  return array;
}

console.log(powerOfThree(3));
