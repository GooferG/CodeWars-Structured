const reverseSeq = (n) => {
  let reversedArr = [];
  for (let i = n; i >= 1; i--) {
    reversedArr.push(i);
  }
  return reversedArr;
};

console.log(reverseSeq(5));
