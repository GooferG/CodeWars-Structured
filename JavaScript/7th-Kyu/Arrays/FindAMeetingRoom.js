function meeting(x) {
  if (x.indexOf("O") === -1) {
    return `None available!`;
  } else {
    return x.indexOf("O");
  }
}

console.log(meeting(["X", "O", "X"]));
console.log(meeting(["X", "X", "X"]));
