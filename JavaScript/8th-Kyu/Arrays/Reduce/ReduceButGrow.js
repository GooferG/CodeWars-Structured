function grow(x) {
  return x.reduce((acc, c) => acc * c, 1);
}

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [42, 19, 77, 33, 57];
// reduce runs once for each element in the array,
// everytime reduce runs, we get two values
// an accumulator and currentValue
// first time we run acc is at 0 and current value is 42,
//  0 + 42
// then this runs again, acc is 42 and current value is 19
// accumulator is now 61
// next time it runs acc is 61 and current value is 77
// acc is now 138 and current value is 33
// acc is now 171 and current value is 57
// acc is now 228

let sum = nums.reduce((acc, c) => acc + c, 0);
