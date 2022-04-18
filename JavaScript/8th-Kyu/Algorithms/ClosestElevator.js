// function elevator(left, right, call) {
//   // code on! :)
//   if (left === call && right === call) {
//     return "right";
//   } else if (left === call && right !== call) {
//     return "left";
//   } else if (left - call === 1 && right - call === -1) {
//     return "right";
//   } else if (left !== call && right === call) {
//     return "right";
//   } else if (right - call === 2 && left - call <= 1) {
//     return "left";
//   } else if (left - call < right - call) {
//     return "right";
//   } else if (left - call === -1 && right - call === -1) {
//     return "right";
//   } else if (left - call === 2 && right - call === 2) {
//     return "right";
//   } else if (left - call === -1 && right - call === -2) {
//     return "left";
//   } else if (left - call === 2 && right - call === 1) {
//     return "right";
//   } else if (left - call === 1 && right - call === 1) {
//      return "right"
//   } else if (left - call === -2 & right - call === -2) {
//      return "right"
//   }
// }

function elevator(left, right, call) {
  console.log(Math.abs(call - left));
  console.log(Math.abs(call - right));
  return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right";
}

// console.log(elevator(0, 1, 0));
// console.log(elevator(0, 1, 1));
// console.log(elevator(0, 1, 2));
// console.log(elevator(0, 0, 0));
// console.log(elevator(0, 2, 1));
// console.log(elevator(2, 2, 2));
// console.log(elevator(1, 2, 0));
// console.log(elevator(2, 0, 1));
console.log(elevator(0, 0, 1));
// console.log(elevator(2, 2, 0));
// console.log(elevator(1, 0, 2));
// console.log(elevator(2, 1, 0));
// console.log(elevator(2, 2, 1));
