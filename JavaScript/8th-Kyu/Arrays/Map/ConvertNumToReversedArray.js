// function digitize(n) {
//   //code here
//   let intArray = String(n)
//     .split("")
//     .map((n) => {
//       return Number(n);
//     });
//   return intArray.reverse();
// }

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize(35231));

console.log(typeof 12345);
