// Find the difference between oldest and youngest famly members

// function differenceInAges(ages) {
//   let sortedAges = ages.sort((a, b) => a - b);
//   let ageDifference = sortedAges[sortedAges.length - 1] - sortedAges[0];

//   return [sortedAges[0], sortedAges[sortedAges.length - 1], ageDifference];
// }

function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min];
}

console.log(differenceInAges([82, 15, 6, 38, 35]));
console.log(differenceInAges([57, 99, 14, 32]));

let agess = [82, 15, 6, 38, 35];
console.log(...agess);
console.log(Math.min(...agess));
console.log(Math.max(...agess));
