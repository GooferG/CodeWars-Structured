function well(x) {
  let goodIdea = 0;
  let badIdea = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodIdea += 1;
    } else if (x[i] === "bad") {
      badIdea += 1;
    }
  }
  if (goodIdea === 0) {
    return "Fail!";
  } else if (goodIdea <= 2) {
    return "Publish!";
  } else if (goodIdea > 2) {
    return "I smell a series!";
  }
}

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
console.log(well(["good", "bad", "bad", "bad", "bad", "bad", "bad", "good"]));
