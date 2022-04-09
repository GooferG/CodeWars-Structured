let capitals = (word) => {
  // Write your code here
  let capitalizeLetters = [];
  for (let i = 0; i <= word.length; i++) {
    if (word[i].toUpperCase() == word[i]) capitalizeLetters.push(i);
  }
  return capitalizeLetters;
};

console.log(capitals("CodEWaRs"));
