function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase()
    ? true
    : false;
}

console.log(isPalindrome("AbBa"));
console.log(isPalindrome("Abba"));
