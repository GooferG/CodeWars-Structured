function sumStr(a, b) {
  if (a === "") {
    return 0 + b;
  } else if (b === "") {
    return a + 0;
  } else if (a === "" && b === "") {
    return 0;
  } else {
    return parseInt(a) + parseInt(b);
  }
}

console.log(sumStr("34", "5"));
