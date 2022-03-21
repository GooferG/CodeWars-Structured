// Remove exclamation marks from string
function remove(string) {
  let exclamation = string.replace(/[^\w\s]/gi, "");
  console.log(exclamation);
  //coding and coding....
  return exclamation + "!";
}

console.log(remove("h!i"));

/*
Note that the ^ character is the negation of the set [...], gi says global and case-insensitive
and the safelist in the example is digits, wird char, underscores (\w) and whitespaces (\s)

*/
