// Frank's Sticky Calculator
// function stickyCalc(operation, val1, val2) {
//   let a = Math.round(val1).toString();
//   console.log(a);
//   let b = Math.round(val2).toString();
//   console.log(b);
//   let sum = 0;
//   if (operation === "+") {
//     sum = parseInt(a + b) + parseInt(b);
//     return Math.round(sum);
//   } else if (operation === "-") {
//     return parseInt(a + b) - parseInt(b);
//   } else if (operation === "/") {
//     sum = parseInt(a + b) / parseInt(b);
//     return Math.round(sum);
//   } else if (operation === "*") {
//     sum = parseInt(a + b) * parseInt(b);
//     return Math.round(sum);
//   }
// }

function stickyCalc(operation, val1, val2) {
  let a = Math.round(val1).toString();
  let b = Math.round(val2).toString();
  let result = parseInt(a + b);
  switch (operation) {
    case "+":
      return Math.round((result += parseInt(b)));
    case "-":
      return Math.round((result -= parseInt(b)));
    case "/":
      return Math.round((result /= parseInt(b)));
    case "*":
      return Math.round((result *= parseInt(b)));
  }
}

console.log(stickyCalc("+", 4, 7));
console.log(stickyCalc("+", 12.1, 6.8));
console.log(stickyCalc("-", 15.1, 10));
console.log(stickyCalc("/", 10, 7));
console.log(stickyCalc("*", 5, 5));
