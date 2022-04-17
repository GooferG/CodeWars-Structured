function sumMul(n, m) {
  //your idea here
  let sum = 0;
  if (n <= 0 || m <= 0) {
    return "INVALID";
  } else {
    for (let i = n; i < m; i += n) {
      sum += i;
    }
    return sum;
  }
}

console.log(sumMul(2, 9));
