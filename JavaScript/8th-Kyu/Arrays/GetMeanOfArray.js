function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  let totalGrade = 0;
  marks.forEach((mark) => {
    totalGrade += mark;
  });
  let average = totalGrade / marks.length;
  return Math.floor(average);
}

console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));
