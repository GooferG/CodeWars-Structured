function arrayPlusArray(arr1, arr2) {
  //   return arr1.concat(arr2).reduce((total, num) => total + num, 0);
  return [...arr1, ...arr2].reduce((total, num) => total + num, 0);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
// console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
