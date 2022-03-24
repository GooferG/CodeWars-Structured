function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
  // good luck
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));
console.log(isDivideBy(45, 1, 6));
console.log(isDivideBy(45, 5, 15));
console.log(isDivideBy(4, 1, 4));
console.log(isDivideBy(15, -5, 3));
console.log(isDivideBy(8178, 2, 1));
