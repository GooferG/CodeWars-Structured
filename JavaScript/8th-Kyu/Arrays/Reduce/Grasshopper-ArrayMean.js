var findAverage = function (nums) {
  // Code here
  return nums.reduce((acc, c) => acc + c, 0) / nums.length;
};

console.log(findAverage([1, 3, 5, 7]));
