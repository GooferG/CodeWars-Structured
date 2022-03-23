function sumMul(n, m) {
  //your idea here
  let number = 0;
  if (m <= 0) {
    return "INVALID";
  } else if (n <= 0) {
    return "INVALID";
  } else if (m > 0) {
    for (let i = n; i < m; i += n) {
      console.log(i);
      number += i;
      console.log(number);
    }
  }
  return number;
}
console.log(sumMul(2, 9));
//console.log(sumMul(758, 817061));
// console.log(sumMul(0, 606698));
// console.log(sumMul(3, 13));
// console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
console.log(sumMul(0, 0));
