// function fakeBin(x) {
//   let binary = "";
//   for (let i = 0; i < x.length; i++) {
//     x[i] < 5 ? (binary += 0) : (binary += 1);
//   }
//   return binary;
// }

function fakeBin(x) {
  // remember split("") converts a string to an array
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("45385593107843568"));
