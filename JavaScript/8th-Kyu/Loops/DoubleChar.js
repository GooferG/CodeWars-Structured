function doubleChar(str) {
  // Your code here
  //   let double = "";
  //   for (let i in str) {
  //     double += str[i].repeat(1);
  //     return double;
  //   }
  let doubleString = "";
  for (let i = 0; i < str.length; i++) {
    doubleString += str[i].repeat(2);
  }
  return doubleString;
}

console.log(doubleChar("abcd"));
console.log(doubleChar("Adidas"));
console.log(doubleChar("1337"));
console.log(doubleChar("illuminati"));

// console.log(doubleChar("ab"));

// let str = "Buzz";
// for (let i = 0; i < str.length; i++) {
//   let double = str[i].repeat(2);
// }

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(result);
