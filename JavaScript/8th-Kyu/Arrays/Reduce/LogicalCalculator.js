// logical calculator

function logicalCalc(array, op) {
  switch (op) {
    case "OR":
      return array.reduce((a, b) => a || b);
      break;
    case "AND":
      return array.reduce((a, b) => a && b);
      break;
    case "XOR":
      return array.reduce((a, b) => a != b);
      break;
  }
}

console.log(logicalCalc([true, true, true, false], "AND"));

console.log([true, true, true, false].reduce((acc, item) => acc && item));

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false || false);
console.log(true != true);
console.log(true != false);
console.log(false != false);
console.log(true != true);
