// function maps(x) {
//   let newX = [];
//   x.forEach((doubleArr) => {
//     let y = doubleArr * 2;
//     newX.push(y);
//   });
//   return newX;
// }

// function maps(x) {
//   return x.map((item) => item * 2);
// }

const maps = (arr) => arr.map((x) => x * 2);

console.log(maps([2, 4, 6]));
