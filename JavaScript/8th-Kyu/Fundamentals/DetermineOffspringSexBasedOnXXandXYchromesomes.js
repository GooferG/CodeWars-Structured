function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

console.log(chromosomeCheck("XX"));
console.log(chromosomeCheck("XY"));
console.log(chromosomeCheck("Y"));

function chromosomeCheck(sperm) {
  if (sperm === "XY") {
    return "Congratulations! You're going to have a son.";
  } else if (sperm === "XX") {
    return "Congratulations! You're going to have a daughter.";
  }
}
