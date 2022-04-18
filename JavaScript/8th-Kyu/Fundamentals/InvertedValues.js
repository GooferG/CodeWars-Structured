// function invert(array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     arr.push(-array[i]);
//   }
//   return arr;
// }

function invert(array) {
  return array.map((x) => (x === 0 ? x : -x));
}

console.log(invert([1, 2, 3, 4, -5]));
