function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  let aSum = a.reduce((acc, item) => acc + item ** 2, 0);
  console.log(aSum);
  let bSum = b.reduce((acc, item) => acc + item ** 3, 0);
  console.log(bSum);
  return aSum > bSum ? true : false;
}

console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]));

function arrayMadness2(a, b) {
  if (a.length >= 1 && b.length >= 1) {
    return a.reduce((acc, item) => acc + item ** 2, 0) >
      b.reduce((acc, item) => acc + item ** 3, 0)
      ? true
      : false;
  } else {
    return false;
  }
}

console.log(arrayMadness2([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]));

console.log([15].length >= 1);
