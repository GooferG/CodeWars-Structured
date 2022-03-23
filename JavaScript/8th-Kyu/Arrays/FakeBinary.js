function fakeBin(x) {
  let binary = "";
  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? (binary += 0) : (binary += 1);
  }
  return binary;
}

console.log(fakeBin("45385593107843568"));
