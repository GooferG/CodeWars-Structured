function sumOfDifferences(arr) {
  // Code goes here
  // test code
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));

let array = [-3, -2, -1];
console.log(Math.max(...array));
console.log(Math.min(...array));
