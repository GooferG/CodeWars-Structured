// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel. Return the resulting array.

function isVow(a) {
  const vowel = { 97: "a", 101: "e", 105: "i", 111: "o", 117: "u" };
  return a.map((arrItem) => vowel[arrItem] || arrItem);
}

console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));

//a - 97
//e - 101
//i - 105
//o - 111
//u - 117
