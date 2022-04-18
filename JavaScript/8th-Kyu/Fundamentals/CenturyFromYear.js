function century(year) {
  // Finish this :)
  let lastTwo = String(year).slice(-2);
  let century = String(year).slice(0, -2);
  if (lastTwo === "00") {
    return Number(century);
  } else {
    return Number(century) + 1;
  }
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(801));
console.log(century(800));
