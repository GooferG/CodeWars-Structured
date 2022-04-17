function noBoringZeros(n) {
  // your code
  //   console.log(String(n).search("0"));
  //   console.log(String(n).slice(0, String(n).search("0")));
  //   return +(String(n).slice(0, String(n).lastIndexOf("0")));
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

console.log(noBoringZeros(96000));
