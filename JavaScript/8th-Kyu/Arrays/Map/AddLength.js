// function addLength(str) {
//   return str.split(" ").map(function (v) {
//     return v + " " + v.length;
//   });
// }

function addLength(str) {
  return str.split(" ").map(function (item) {
    return item + " " + item.length;
  });
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));
