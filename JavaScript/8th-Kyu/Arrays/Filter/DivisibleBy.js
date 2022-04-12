// function divisibleBy(numbers, divisor) {
//   let divisibleArr = [];
//   numbers.forEach((item) => {
//     if (item % divisor === 0) {
//       divisibleArr.push(item);
//     }
//   });
//   return divisibleArr;
// }

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

function divisibleBy2(numbers, divisor) {
  return numbers.filter((item) => item % divisor === 0);
}

console.log(divisibleBy2([1, 2, 3, 4, 5, 6], 2));

const ages = [15, 6, 9, 20, 25, 14, 30];
let olderThan18 = ages.filter((age) => age > 18);
console.log(olderThan18);
