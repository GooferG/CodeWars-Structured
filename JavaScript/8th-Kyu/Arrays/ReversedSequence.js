const reverseSeq = (n) => {
  let reversedArr = [];
  for (let i = n; i >= 0; i--) {
    reversedArr.push(i);
  }
  return reversedArr;
};

console.log(reverseSeq(5));
