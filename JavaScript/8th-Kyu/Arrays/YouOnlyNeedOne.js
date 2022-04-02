function check(a, x) {
  // your code here
  let checkArray = a.indexOf(x);
  return checkArray !== -1;
}

console.log(check(["what", "a", "great", "kata"], "kat"));
