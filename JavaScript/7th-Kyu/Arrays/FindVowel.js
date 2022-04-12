function vowelIndices(word) {
  //your code here
  let vowelReturn = [];
  let vowelArrays = ["a", "e", "i", "o", "u"];
  let string = word.filter((letter) => vowelArrays.includes(letter));
  return string;
}

console.log(vowelIndices("apple")); //[1, 5]
