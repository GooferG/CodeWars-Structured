// const reverseSeq = (n) => {
//   let reversedArr = [];
//   for (let i = n; i >= 1; i--) {
//     reversedArr.push(i);
//   }
//   return reversedArr;
// };

const reverseSeq = (n) => {
  return Array(n)
    .fill(0)
    .map((item, index) => n - index);
  //  .fill(0)
  //  .map((e, i) => n - i);
};

console.log(reverseSeq(5));
