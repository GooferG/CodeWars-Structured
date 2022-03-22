function arrayPlusArray(arr1, arr2) {
  let arr1Sum = 0;
  let arr2Sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    arr1Sum += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    arr2Sum += arr2[i];
  }

  return arr1Sum + arr2Sum; //something went wrong
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
