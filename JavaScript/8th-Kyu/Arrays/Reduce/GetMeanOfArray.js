function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  return (
    Math.floor(marks.reduce((acc, currentValue) => acc + currentValue, 0)) /
    marks.length
  );
}

console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
