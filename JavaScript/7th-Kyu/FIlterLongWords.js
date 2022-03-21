function filterLongWords(sentence, n) {
  //Solution here
  let wordsLongerThanNChar = [];
  let givenSentence = sentence.split(" ");
  console.log(givenSentence);
  for (let i = 0; i < givenSentence.length; i++) {
    console.log(givenSentence[i]);
    if (givenSentence[i].length > n) {
      wordsLongerThanNChar.push(givenSentence[i]);
    }
  }
  return wordsLongerThanNChar;
}

console.log(filterLongWords("I love to code", 3));

let test = ["Pacific", "Rim", "Up", "Rising"];
console.log(test[0].length);
for (let i = 0; i < test.length; i++) {
  console.log(test[i]);
}
