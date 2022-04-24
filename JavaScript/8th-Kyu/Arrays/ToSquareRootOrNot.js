function squareOrSquareRoot(array) {
  return array.map((item) => {
    const r = Math.sqrt(item);
    return r % 1 == 0 ? r : item * item;
  });
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

console.log(Math.sqrt(49));

let squareOrSQRT = (array) => {
  return array.map((item) => {
    const r = Math.sqrt(item);
    return r % 1 == 0 ? r : item * item;
  });
};

console.log(squareOrSQRT([4, 3, 9, 7, 2, 1]));

console.log(Math.sqrt(4));
console.log(Math.sqrt(3));
console.log(Math.sqrt(9));
console.log(Math.sqrt(7));
console.log(Math.sqrt(2));
console.log(Math.sqrt(1));
