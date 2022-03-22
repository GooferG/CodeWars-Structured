function abbrevName(name) {
  let split = name.split("");
  for (let i = 0; i < split.length; i++) {
    if (split[i] === " ") {
      split[i] = ".";
      break;
    }
  }
  let period = split.indexOf(".");
  let firstInitial = split[0];
  let lastInitial = split[period + 1];

  return firstInitial.toUpperCase() + split[period] + lastInitial.toUpperCase();
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("david Mendieta"));

const arr = ["a", "b", "c"];

const index = arr.indexOf("a"); // 👉️  0
