function maps(x) {
  let newX = [];
  x.forEach((doubleArr) => {
    let y = doubleArr * 2;
    newX.push(y);
  });
  return newX;
}

console.log(maps([2, 4, 6]));
