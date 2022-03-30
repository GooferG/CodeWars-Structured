// function meeting(x) {
//   if (x.indexOf("O") === -1) {
//     return `None available!`;
//   } else {
//     return x.indexOf("O");
//   }
// }
let meeting = (arr) =>
  (arr = arr.join("").indexOf("O")) > -1 ? arr : "None available!";

console.log(meeting(["X", "O", "X"]));
console.log(meeting(["X", "X", "X"]));

let array = ["X", "X", "X"];
console.log(array.join(""));
