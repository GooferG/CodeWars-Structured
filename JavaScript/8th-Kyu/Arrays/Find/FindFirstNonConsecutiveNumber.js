function firstNonConsecutive(arr) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] + 1 != arr[i + 1]) {
  //       return arr[i + 1];
  //     }
  //   }
  //   return null;
  let result = arr.find((val, index) => val !== index + arr[0]);
  return Number.isInteger(result) ? result : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
