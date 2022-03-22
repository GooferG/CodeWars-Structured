function positiveSum(arr) {
  let positiveNumber = 0;
  let negativeNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      console.log(arr[i]);
      positiveNumber += arr[i];
      console.log(positiveNumber);
    } else if (arr[i] < 0) {
      negativeNumber += arr[i];
      console.log(negativeNumber);
    }
  }
  return positiveNumber;
}

console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
