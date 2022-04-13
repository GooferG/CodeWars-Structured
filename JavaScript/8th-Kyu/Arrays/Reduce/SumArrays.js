// function sum(numbers) {
//   "use strict";
//   if (numbers === null) {
//     return 0;
//   } else {
//     return numbers.reduce((acc, c) => acc + c, 0);
//   }
// }

function sum(numbers) {
  return numbers.reduce((acc, c) => acc + c, 0);
}

console.log(sum([]));
console.log(sum([1, 5.2, 4, 0, -1]));
