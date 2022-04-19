// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  //Code here
  //   numbers.sort(function (a, b) {
  //     return a - b;
  //   });
  //   return numbers[0] + numbers[1];
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

let newArr = [5, 8, 12, 19, 22];
console.log(newArr.sort());
