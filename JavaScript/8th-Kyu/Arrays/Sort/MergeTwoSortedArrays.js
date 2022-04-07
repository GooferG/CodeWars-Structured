function mergeArrays(arr1, arr2) {
  //   return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

// function mergeArrays(arr1, arr2) {
//    let arr1AndArr2 = arr1.concat(arr2);
//    // console.log(arr1AndArr2)

//   function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
//   }
//    let sortedArr1AndArr2 = arr1AndArr2.sort(compareNumeric);
//    // console.log(sortedArr1AndArr2)
//    let uniqueChars = [...new Set(sortedArr1AndArr2)];
//    // console.log(uniqueChars)

//   return uniqueChars;
// }

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));
console.log(mergeArrays([1, 3, 5, -7, 9, 11, 12], [-1, 2, 3, 4, 5, 10, 12]));
