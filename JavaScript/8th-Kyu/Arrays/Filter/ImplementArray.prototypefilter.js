// Implement Array.prototype.filter()

Array.prototype.filter = function (fn) {
  let results = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      results.push(this[i]);
    }
  }
  return results;
};

console.log(
  [1, 9, 3, 4, 8, 2, 7].filter((num) => {
    return num > 4;
  })
);

console.log(
  [18, 19, 20, 25, 34, 45, 88].filter((num) => {
    return num > 21 && num < 55;
  })
);
