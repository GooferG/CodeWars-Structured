function noBoringZeros(n) {
  // your code
  if (n === 0) {
    return 0;
  } else {
    // String(n) =
    while (n % 10 == 0) {
      n /= 10;
    }
  }
  return n;
}

console.log(noBoringZeros(96));
