// Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove2(string) {
  //coding and coding....
  if (string.slice(-1) == "!") {
    return string.slice(0, -1);
  } else if (string.slice(-1) != "!") {
    return string;
  }
}

function remove(string) {
  //coding and coding....
  return string.slice(-1) == "!" ? string.slice(0, -1) : string;
}

let text = "adsfae";
let letter = text.length;
console.log(text.charAt(letter));

console.log(remove("Hi!"));
console.log(remove("Hi!, Hi!"));
console.log(remove("Hi! - Hi!?!!j!"));
console.log(remove("Hi!!!!"));
console.log(remove("Hi! hi ! hi"));
