// function find_average(array) {
//   // your code here
//   if (array.length === 0) {
//     return 0;
//   } else {
//     let average = array.reduce((acc, c) => acc + c, 0);
//     return average / array.length;
//   }
// }

function find_average(array) {
  // your code here
  return array.length === 0
    ? 0
    : array.reduce((acc, c) => acc + c, 0) / array.length;
}

// console.log(find_average([75, 6, 26, 17, 80, 51, 44, 39, 19, 22, 86, 27, 90, 30]));
console.log(find_average([]));
