// Remove First and Last Character

function removeChar(str) {
  //You got this!
  //   let string = str.split("");
  //    string.pop();
  //    string.shift();
  //   return string.join("");
  return str.slice(1, -1);
}

console.log(removeChar("EloquentJavaScript"));
let str = "test";
console.log(str.split(""));
