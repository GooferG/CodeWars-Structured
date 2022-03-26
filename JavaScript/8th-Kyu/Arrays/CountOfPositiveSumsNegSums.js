function countPositivesSumNegatives(input) {
  let arr = [];
  let positiveCount = 0;
  let negative = 0;

  if (input === null || input.length === 0) {
    return arr;
  }

  for (let i = 0; i < input.length; i++)
    if (input[i] == 0) {
      continue;
    } else if (input[i] > 0) {
      positiveCount += 1;
    } else if (input[i] < 0) {
      negative += input[i];
    }

  return [positiveCount, negative];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(countPositivesSumNegatives([]));

let test = [];
console.log(test.length === 0);
