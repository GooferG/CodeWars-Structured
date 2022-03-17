function doubleChar(str) {
  // Your code here
  let double = "";
  for (let i in str) {
    double += str[i].repeat(1);
    return double;
  }
}

console.log(doubleChar("ab"));

let str = "Buzz";
for (let i = 0; i < str.length; i++) {
  console.log(str[i].repeat(2));
}

let text = "Hello world!";
let result = text.repeat(2);
console.log(result);
