function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    console.log(x * i);
    z.push(x * i);
  }
  return z;
}

console.log(countBy(1, 10));
