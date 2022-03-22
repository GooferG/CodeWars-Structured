function mergeArrays(arr1, arr2) {
  let arr1AndArr2 = arr1.concat(arr2);

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }
  let sortedArr1AndArr2 = arr1AndArr2.sort(compareNumeric);
  let uniqueChars = [...new Set(sortedArr1AndArr2)];

  return uniqueChars;
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
console.log(mergeArrays([1, 3, 5, -7, 9, 11, 12], [-1, 2, 3, 4, 5, 10, 12]));

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr);