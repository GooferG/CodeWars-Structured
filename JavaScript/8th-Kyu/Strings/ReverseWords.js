function reverseWords(str) {
  str = str.split(" ").reverse().join(" "); // let reverseBackFromArray = reverseString.split(",");
  return str;
}

console.log(
  reverseWords("The greatest victory is that which requires no battle")
);

let arr = ["Bilbo", "Gandalf", "Nazgul"];

let str = arr.join(" "); // glue the array into a string using ;

console.log(str);
