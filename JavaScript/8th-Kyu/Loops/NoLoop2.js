function check(a, x) {
  if (a.indexOf(x) !== -1) {
    console.log(a.indexOf(x));
    return true;
  } else if (a.indexOf(x) !== undefined) {
    return false;
  }
}

console.log(check([66, 101], 66));
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log(check(["t", "e", "s", "t"], "e"));
console.log(check(["what", "a", "great", "kata"], "kat"));

let nums = [66, 101];
console.log(nums.indexOf(66));
let nums2 = [80, 117, 115, 104, 45, 85, 112, 115];
console.log(nums2.indexOf(45));
let word = ["what", "a", "great", "kata"];
console.log(word.indexOf("kat"));
