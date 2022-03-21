function tetration(x, y) {
  // your code here
  if (y === 0) {
    return 1;
  } else if (y === 1) {
    return y * x;
  } else if (y >= 2) {
    return x ** y;
  }
}

console.log(tetration(4, 0));
console.log(tetration(7, 1));
console.log(tetration(5, 2));
console.log(tetration(2, 3));
console.log(0 ** 4);
